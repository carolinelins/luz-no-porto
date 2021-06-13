import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import api from '../../../api';

class GraficoRateio extends Component {
  state = {
    equipamentos: [],
  };
  async componentDidMount() {
    const response = await api.get('/tiposDeEquipamentos');

    this.setState({ equipamentos: response.data });
    console.log(response.data);
  }

  render() {
    let { equipamentos } = this.state;

    if (!equipamentos || equipamentos.length === 0) {
      return null;
    }
    return (
      <div className="card bg-light text-dark m-3">
        <div id="chart" className="card-body">
          <Chart
            options={{
              chart: {
                type: 'bar',
                height: 350,
              },
              title: {
                text: 'Rateio',
                align: 'left',
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                },
              },
              dataLabels: {
                enabled: false,
              },

              //EXEMPLO DINAMICO - FUNCIONANDO -[AGUARDANDO REQUISICAO DO CONSUMO POR EMPRESAS - UTILIZAMOS EQUIPAMENTO DE EXEMPLO DINAMICO]
              // xaxis: {
              //   categories: equipamentos.map((value) => value.nome),
              // },

              //EXEMPLO ESTATICO - FUNCIONANDO
              xaxis: {
                categories: [
                  'NGPD',
                  'Cesar',
                  'For Solutions',
                  'G3',
                  'Fast',
                  'Fontech',
                  'Belweb',
                ],
              },
            }}
            // EXEMPLO DINAMICO - FUNCIONANDO [AGUARDANDO REQUISICAO]
            // series={[
            //   {
            //     name: 'Consumo kWh',
            //     data: equipamentos.map((value) => value.id),
            //   },
            // ]}
            // EXEMPLO ESTATICO - FUNCIONANDO
            series={[
              {
                name: 'Consumo kWh',
                data: [23480, 16390, 14480, 14101, 12280, 8790, 6013],
              },
            ]}
            // labels={equipamentos.map((value)=>value.nome)}
            type="bar"
            height={350}
            width={450}
          />
        </div>
      </div>
    );
  }
}

export default GraficoRateio;
