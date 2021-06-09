import Moment from 'moment';

export const resumo = (medicoes) => {
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
