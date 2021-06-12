import React, { Component } from 'react';
import Api from '../../../api';

class FiltroDispositivo extends Component {
  state = {
    tiposEquipamentos: [],
  };

  async componentDidMount() {
    const response = await Api.get('/tiposDeEquipamentos');

    this.setState({ tiposEquipamentos: response.data });
  }

  render() {
    const { tiposEquipamentos } = this.state;

    return (
      <div className="dispositivo">
        <div className="input-group mb-3 pt-3">
          <div className="input-group-prepend">
            <label className="input-group-text pr-4">Equipamento</label>
          </div>
          <select className="custom-select">
            <option>Todos</option>
            {tiposEquipamentos.map((equipamento) => (
              <option disabled key={equipamento.id}>
                {equipamento.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default FiltroDispositivo;
