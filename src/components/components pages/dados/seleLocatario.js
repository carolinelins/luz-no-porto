import React, { Component } from 'react';
import Api from '../../../api';

class SeleLocatario extends Component {
  state = {
    locatarios: [],
    tiposEquipamentos: [],
    localizacaoSalas: []
  };

  
  async componentDidMount() {
    
    const response = await Api.get('/locatarios');
    const responseTiposEquipamentos = await Api.get('/tiposDeEquipamentos')
    const responseLocalizacaoSalas = await Api.get('/salas')
    // console.log(response.data);
    // console.log(responseEquipamentos.data);

    
    this.setState({ locatarios: response.data});
    this.setState({tiposEquipamentos: responseTiposEquipamentos.data });
    this.setState({localizacaoSalas: responseLocalizacaoSalas.data });
  }

  render() {
    
    const { locatarios } = this.state;
    const { tiposEquipamentos } = this.state;
    const { localizacaoSalas } = this.state;
    

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

        <select>
          <option>Todas</option>
        {localizacaoSalas.map((sala) => (
          <option key={sala.id}>
              {sala.nome}
          </option>
        ))}
        </select>
          <label>De:</label>
          <input type="date"></input>
          <label>Até:</label>
          <input type="date"></input>

      </div>
      
    );
  }
}

export default SeleLocatario;
