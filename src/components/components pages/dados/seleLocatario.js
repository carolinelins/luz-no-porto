import React, { Component } from 'react';
import Api from '../../../api';

class SeleLocatario extends Component {
  state = {
    locatarios: [],
  };

  
  async componentDidMount() {
    
    const response = await Api.get('');

    console.log(response.data);

    
    this.setState({ locatarios: response.data });
  }

  render() {
    
    const { locatarios } = this.state;

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
      </div>
      
    );
  }
}

export default SeleLocatario;
