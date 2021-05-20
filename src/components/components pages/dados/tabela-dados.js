import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Api from '../../../api';

class TabelaDados extends Component {
  state = {
    medicoes: [],
  };

  async componentDidMount() {
    const responseMedicao = await Api.get('/medicoes');

    this.setState({ medicoes: responseMedicao.data });
  }

  render() {
    const { medicoes } = this.state;

    return (
      <div className="pr-1 pt-4 pl-4 pb-2 mx-auto">
        <Table className="table-striped table-condensed table-responsive table-right">
          <thead>
            <tr className="text-center">
              <th>Id</th>
              <th>Inicio Medição</th>
              <th>Fim Medição</th>
              <th>Consumo(kWh)</th>
            </tr>
          </thead>
          <tbody>
            {medicoes.map((medicao) => (
              <tr>
                <td className="text-right" key={medicao.id}>
                  {medicao.id}
                </td>
                <td className="text-right">{medicao.inicioMedicao}</td>
                <td className="text-right">{medicao.fimMedicao}</td>
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
