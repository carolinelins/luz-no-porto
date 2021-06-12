import React, { Component } from 'react';
import Api from '../../../api';
import Moment from 'moment';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

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
    console.log(dataInicio, dataFim);
    const responseMedicao = await Api.get(url);
    console.log(responseMedicao);
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
    //const { medicoes, loading } = this.state;
    const { medicoes } = this.state;

    const styles = StyleSheet.create({
      table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
      },
      tableRow: {
        margin: 'auto',
        flexDirection: 'row',
      },
      tableCol: {
        width: '25%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCell: {
        margin: 'auto',
        marginTop: 5,
        fontSize: 20,
      },
    });

    return (
      <div className="pr-5 pt-4 pl-4 pb-2 mx-auto">
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Início da medição</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Consumo(kW/h)</Text>
            </View>
          </View>

          {medicoes.map((medicao, index) => (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{medicao.inicioMedicao}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{medicao.valor}</Text>
              </View>
            </View>
          ))}
        </View>
      </div>
    );
  }
}

export default TabelaDados;
