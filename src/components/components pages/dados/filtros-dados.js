import React, { Component } from 'react';
import Api from '../../../api';
import Button from '@material-ui/core/Button';

class FiltrosDados extends Component {
  state = {
    locatarios: [],
    tiposEquipamentos: [],
    localizacaoSalas: [],
  };

  async componentDidMount() {
    const response = await Api.get('/locatarios');
    const responseTiposEquipamentos = await Api.get('/tiposDeEquipamentos');
    const responseLocalizacaoSalas = await Api.get('/salas');
    // console.log(response.data);
    // console.log(responseEquipamentos.data);

    this.setState({ locatarios: response.data });
    this.setState({ tiposEquipamentos: responseTiposEquipamentos.data });
    this.setState({ localizacaoSalas: responseLocalizacaoSalas.data });
  }

  render() {
    const { locatarios } = this.state;
    const { tiposEquipamentos } = this.state;
    const { localizacaoSalas } = this.state;

    return (
      <div className="pl-5 pt-5">
        <div className="pt-4">
          <div>
            <label className="pr-3">De:</label>
            <input type="date"></input>
          </div>
          <div>
            <label className="pt-2 pr-3">Até:</label>
            <input type="date"></input>
          </div>
        </div>

        <div>
          <label className="pr-3">Empresa: </label>
          <select>
            <option>Todas</option>
            {locatarios.map((locatario) => (
              <option key={locatario.cnpj}>{locatario.nomeFantasia}</option>
            ))}
          </select>
        </div>

        <div className="pt-4">
          <label className="pr-3">Localização: </label>
          <select>
            {localizacaoSalas.map((sala) => (
              <option key={sala.id}>{sala.nome}</option>
            ))}
          </select>
        </div>

        <div className="pt-4">
          <label className="pr-3">Equipamento: </label>
          <select>
            <option value="">Todos</option>
            {tiposEquipamentos.map((equipamento) => (
              <option key={equipamento.id}>{equipamento.nome}</option>
            ))}
          </select>
        </div>

        <Button variant="contained" color="primary">
          Consultar
        </Button>
      </div>
    );
  }
}

export default FiltrosDados;
