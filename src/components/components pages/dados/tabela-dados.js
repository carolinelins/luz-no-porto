import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Api from '../../../api';
import Moment from 'moment';

const resumo = (medicoes) => {
  let result = [];
  let total = 0.0;
  let dataMedicao = medicoes[0].inicioMedicao;
  let dataAnterior = dataMedicao.substring(0, dataMedicao.indexOf('T'));
  let data;
  for (let i = 0; i < medicoes.length; ++i) {
    dataMedicao = medicoes[i].inicioMedicao;
    data = dataMedicao.substring(0, dataMedicao.indexOf('T'));
    if (data === dataAnterior) {
      total += medicoes[i].valor;
    } else {
      result.push({
        inicioMedicao: Moment(dataAnterior).format('DD-MM-YY'),
        valor: total.toFixed(2),
      });
      total = medicoes[i].valor;
    }
    dataAnterior = data;
  }
  result.push({
    inicioMedicao: Moment(data).format('DD-MM-YY'),
    valor: total.toFixed(2),
  });
  return result;
};

class TabelaDados extends Component {
  state = {
    medicoes: [],
    loading: false,
  };

  componentDidMount() {
    this.getTabela();
  }

  getTabela = async () => {
    const { dataInicio, dataFim } = this.props;
    this.setState({ loading: true });
    let url = '/medicoes';
    if (dataInicio && dataInicio) {
      // && dataFim nao??
      url += `/buscarPorPeriodo/${dataInicio}/${dataFim}`;
    }
    const responseMedicao = await Api.get(url);
    this.setState({ loading: false });
    if (dataInicio && dataInicio) {
      this.setState({ medicoes: resumo(responseMedicao.data.medicoes) });
    } else {
      this.setState({ medicoes: resumo(responseMedicao.data) });
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.dataInicio &&
      this.props.dataFim &&
      (this.props.dataInicio !== prevProps.dataInicio ||
        this.props.dataFim !== prevProps.dataFim)
    ) {
      this.getTabela();
    }
  }

  render() {
    const { medicoes, loading } = this.state;

    const styles = {
      width: '60%',
    };

    if (loading) {
      return (
        <div>
          <h3>Carregando...</h3>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: styles.width }}
            ></div>
          </div>
        </div>
      );
    }

    return (
      <div className="pr-5 pt-4 pl-4 pb-2 mx-auto">
        <Table className="table-striped table-condensed table-responsive">
          <thead>
            <tr className="text-center">
              {/* <th>Id</th> */}
              <th>Inicio Medição</th>
              {/* <th>Fim Medição</th> */}
              <th>Consumo(kWh)</th>
            </tr>
          </thead>
          <tbody>
            {medicoes.map((medicao, index) => (
              <tr key={index}>
                {/* <td className="text-right">{medicao.id}</td> */}
                <td className="text-right">{medicao.inicioMedicao}</td>
                {/* <td className="text-right">{medicao.fimMedicao}</td> */}
                <td className="text-center">{medicao.valor}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TabelaDados;
