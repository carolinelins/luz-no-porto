import React, { Component } from 'react';
import api from '../../../api';

class FiltroLocatario extends Component {
  state = { locatarios: [] };

  async componentDidMount() {
    const response = await api.get('/locatarios');

    this.setState({ locatarios: response.data });
  }

  render() {
    const { locatarios } = this.state;

    return (
      <div className="empresa">
        <div className="input-group mb-3 pt-3">
          <div className="input-group-prepend">
            <label className="input-group-text pr-4">Empresa</label>
          </div>
          <select className="custom-select">
            <option>Todas</option>
            {locatarios.map((locatario) => (
              <option disabled key={locatario.id}>
                {locatario.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default FiltroLocatario;
