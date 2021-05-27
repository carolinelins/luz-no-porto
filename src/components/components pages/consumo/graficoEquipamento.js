import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import api from '../../../api';

class GraficoEquipamento extends Component {

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
      
      <div className="donut">
        
        <Chart 
          options={ {
            // labels:[equipamentos.map((value)=>value.nome)],
                    chart: {
                      type: 'donut',
                    },
                    responsive: [{
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 200
                        },
                        legend: {
                          position: 'bottom'
                        }
                      }
                    }]
                  }}
            series={equipamentos.map((value)=>value.id)}
            labels={equipamentos.map((value)=>value.nome)}
            type="donut" 
            width="380"  />
      </div>  
    );
  }
}





export default GraficoEquipamento;

// class ApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
    
//       series: [44, 55, 41, 17, 15],
//       options: {
//         chart: {
//           type: 'donut',
//         },
//         responsive: [{
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: 'bottom'
//             }
//           }
//         }]
//       },
    
    
//     };
//   }



//   render() {
//     return (
      


// <div id="chart">
// <Chart options={this.state.options} series={this.state.series} type="donut" />
// </div>

// );
// }
// }

// export default ApexChart;



