import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Api from '../../../api';

class Table1 extends Component {
  state = {
    medicoes: [],
    
  };


  async componentDidMount() {
    
    const responseMedicao = await Api.get('/medicoes');
   

    
    this.setState({ medicoes: responseMedicao.data});
    
  }

  render() {
    
    const { medicoes } = this.state;
    
    

    return (
      <div>
        

        {/* <select>
        {locatarios.map((locatario) => (
          <option key={locatario.cnpj}>
              {locatario.nomeFantasia}
          </option>
        ))}
        </select> */}

        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Período</th>
            <th>Dispositivo</th>
            <th>Consumo</th>
            <th>%Consumo</th>
            <th>Comparativo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
          {medicoes.map((medicao) => (
            <td key={medicao.id}>{medicao.inicioMedicao}</td>
            ))}
          </tr>
          <tr>
            <th scope="row" width="10px">2</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>


       

       
         

      </div>
      
    );
  }
}



  
  
  export default Table1;