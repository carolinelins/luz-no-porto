import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import api from '../../../api';

class GraficoRateio extends Component {
   
    state = {
        equipamentos:[],
    }
    async componentDidMount(){
        const response = await api.get('/tiposDeEquipamentos')

        this.setState({equipamentos: response.data});
        console.log(response.data);
    }
      
    

  

    render() {
        let {equipamentos} = this.state
    
        if(!equipamentos || equipamentos.length===0){
          return <h1>Erro no servidor</h1>
        }
      return (
        


    <div id="chart">
        <Chart 
        options={{
            series: [{
                data:[equipamentos.map((value)=>value.id)]
            }],
            chart: {  
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
            categories: [equipamentos.map((value)=>value.nome)],
          }}}
        series={equipamentos.map((value)=>value.id)}
        // labels={equipamentos.map((value)=>value.nome)}
        type="bar"
        height={350} width={300}/>
        </div>



      );
    }
}

  export default GraficoRateio;






//estatico

// class graficoRateio extends Component {
//     constructor(props) {
//       super(props);

      

//       this.state = {
      
//         series: [{
//           data: [40, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
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
        


//         <div id="chart">
//             <Chart options={this.state.options} 
//             series={this.state.series}
//             type="bar"
//             height={350} />
//         </div>



//       );
//     }
//   }

//   export default graficoRateio;