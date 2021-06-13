import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import api from '../../../api';

class GraficoConsumo extends Component {
  state = {
    equipamentos: [],
  };
  async componentDidMount() {
    const response = await api.get('/tiposDeEquipamentos');

    this.setState({ equipamentos: response.data });
  }

  render() {
    const { equipamentos } = this.state;

    if (!equipamentos || equipamentos.length === 0) {
      return null;
    }
    console.log(equipamentos.map((value) => value.id));
    console.log(equipamentos.map((value) => value.nome));
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
                // categories: equipamentos.map((value) => value.nome),

                //EXEMPLO EIXO X ESTATICO - FUNCIONANDO
                // CATEGORIES - SEMANAL
                categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
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
                //EXEMPLO DINAMICO - FUNCIONANDO
                // name: equipamentos.map((value) => value.nome),
                // data: equipamentos.map((value) => value.id),

                //EXEMPLO ESTATICO - FUNCIONANDO
                name: 'Consumo kWh',
                data: [183480, 163290, 145480, 194101, 212280, 87990, 62013],
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
