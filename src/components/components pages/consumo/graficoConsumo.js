import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import api from '../../../api';





class GraficoConsumo extends Component {
    
        
    state = {
        equipamentos:[],
    }
    async componentDidMount(){
        const response = await api.get('/tiposDeEquipamentos')

        this.setState({equipamentos: response.data});
    }
        
        
      
    

      render() {

        const {equipamentos} = this.state
    
        if(!equipamentos || equipamentos.length===0){
          return <h1>Erro no servidor</h1>
        }
        console.log(equipamentos.map((value)=>value.id))
        console.log(equipamentos.map((value)=>value.nome))
        return (
          


    <div id="chart">
        <Chart options={{
            chart: {
              type: 'area',
              height: 320,
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            
            title: {
              text: 'Fundamental Analysis of Stocks',
              align: 'left'
            },
            subtitle: {
              text: 'Price Movements',
              align: 'left'
            },
            labels: equipamentos.map((value)=>value.id),
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              opposite: true
            },
            legend: {
              horizontalAlign: 'left'
            }
          }}
          series= {[{
            name: "STOCK ABC",
            data: equipamentos.map((value)=>value.id)
          }]}
        type="area" 
        height={350} />
    </div>
  


        );
      }
    }
  export default GraficoConsumo;