import React, { Component } from 'react';
import Api from '../../../api';

class SeleLocatario extends Component {
  state = {
    locatarios: [],
    tiposEquipamentos: []
  };

  
  async componentDidMount() {
    
    const response = await Api.get('/locatarios');
    const responseTiposEquipamentos = await Api.get('/tiposDeEquipamentos')
    // console.log(response.data);
    // console.log(responseEquipamentos.data);

    
    this.setState({ locatarios: response.data});
    this.setState({tiposEquipamentos: responseTiposEquipamentos.data });
  }

  render() {
    
    const { locatarios } = this.state;
    const { tiposEquipamentos } = this.state;
    

    return (
      <div>
        <h1>Dados Energeticos</h1>

        <select>
        {locatarios.map((locatario) => (
          <option key={locatario.cnpj}>
              {locatario.nomeFantasia}
          </option>
        ))}
        

        </select>
        <select>
        {tiposEquipamentos.map((equipamento) => (
          <option key={equipamento.id}>
              {equipamento.nome}
          </option>
        ))}
        

        </select>
      </div>
      
    );
  }
}

export default SeleLocatario;
