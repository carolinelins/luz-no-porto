import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import api from '../../../api';
import { resumo } from '../../../utils/resumirConsumo';
import { medicoes } from '../../../utils/dadosLocais';
class GraficoConsumo extends Component {
  state = {
    equipamentos: [],
  };
  async componentDidMount() {
    // const response = await api.get('/medicoes');
    // this.setState({ medicoes: resumo(response.data) });
    this.setState({ medicoes: resumo(medicoes) });
  }

  render() {
    const { medicoes } = this.state;

    if (!medicoes || medicoes.length === 0) {
      return null;
    }
    return (
      <div className="card bg-light text-dark m-3">
        <div id="chart" className="card-body">
          <Chart
            options={{
              chart: {
                type: 'area',
                height: 320,
                zoom: {
                  enabled: false,
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: 'straight',
              },

              title: {
                text: 'Consumo Energético',
                align: 'left',
              },
              subtitle: {
                text: 'Porto Digital',
                align: 'left',
              },
              //labels: equipamentos.map((value) => value.name),
              xaxis: {
                //EXEMPLO EIXO X DINAMICO - FUNCIONANDO
                //categories: equipamentos.map((value) => value.nome),
                //EXEMPLO EIXO X ESTATICO - FUNCIONANDO
                // CATEGORIES - SEMANAL
                categories: medicoes.map((value) => value.inicioMedicao),
              },
              yaxis: {
                opposite: true,
              },
              legend: {
                horizontalAlign: 'left',
              },
            }}
            series={[
              {
                // name: equipamentos.map((value) => value.nome),
                name: 'Consumo kWh',
                data: medicoes.map((value) => value.valor),
              },
            ]}
            type="area"
            height={350}
          />
        </div>
      </div>
    );
  }
}
export default GraficoConsumo;
