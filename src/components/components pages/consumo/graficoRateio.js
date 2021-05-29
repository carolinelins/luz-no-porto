import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import api from '../../../api';

class graficoRateio extends Component {
   
    state = {
        equipamentos:[],
    }
    async componentDidMount(){
        const response = await api.get('/tiposDeEquipamentos')

        this.setState({equipamentos: response.data});
        console.log(response.data);
    }
      
        // 
        // options: {
          
        // },
      
      
    

  

    render() {
        const {equipamentos} = this.state
    
        if(!equipamentos || equipamentos.length===0){
          return <h1>Erro no servidor</h1>
        }
      return (
        


    <div id="chart">
        <Chart 
        options={{chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }}}
        series={equipamentos.map((value)=>value.id)}
        labels={equipamentos.map((value)=>value.nome)}
        type="bar"
        height={350}/>
        </div>



      );
    }
}

  export default graficoRateio;






//estatico

// class graficoRateio extends Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [{
//           data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
//         }],
//         options: {
//           chart: {
//             type: 'bar',
//             height: 350
//           },
//           plotOptions: {
//             bar: {
//               borderRadius: 4,
//               horizontal: true,
//             }
//           },
//           dataLabels: {
//             enabled: false
//           },
//           xaxis: {
//             categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
//               'United States', 'China', 'Germany'
//             ],
//           }
//         },
      
      
//       };
//     }

  

//     render() {
//       return (
        


//   <div id="chart">
// <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
// </div>



//       );
//     }
//   }

//   export default graficoRateio;