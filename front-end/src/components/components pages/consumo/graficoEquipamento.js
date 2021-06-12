import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import api from '../../../api';

class GraficoEquipamento extends Component {
  state = {
    equipamentos: [],
  };
  async componentDidMount() {
    const response = await api.get('/tiposDeEquipamentos');

    this.setState({ equipamentos: response.data });
  }

  render() {
    const { equipamentos } = this.state;

    if (
      !equipamentos ||
      equipamentos === undefined ||
      equipamentos === null
      // || equipamentos.length === 0
    ) {
      return <h1>Erro no servidor</h1>;
    }
    console.log(
      'map-id',
      equipamentos.map((value) => value.id),
    );
    console.log(
      'map-nome',
      equipamentos.map((value) => value.nome),
    );

    return (
      <div className="card bg-light text-dark m-3">
        <div className="card-body">
          <Chart
            options={{
              chart: {
                type: 'donut',
              },
              title: {
                text: 'Dispositivos',
                align: 'left',
              },
              subtitle: {
                text: 'Porto Digital',
                align: 'left',
              },
              labels: equipamentos.map((value) => value.nome),
              xaxis: {
                type: 'numeric',
              },
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200,
                    },
                    legend: {
                      position: 'bottom',
                    },
                  },
                },
              ],
            }}
            series={equipamentos.map((value) => value.id)}
            type="donut"
            width="450"
          />
        </div>
      </div>
    );
  }
}

export default GraficoEquipamento;
