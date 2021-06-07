import React, { Component } from 'react';
import Api from '../../../api';

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
    

    this.setState({ locatarios: response.data });
    this.setState({ tiposEquipamentos: responseTiposEquipamentos.data });
    this.setState({ localizacaoSalas: responseLocalizacaoSalas.data });
  }

  render() {
    const { 
      locatarios,
      tiposEquipamentos,
      localizacaoSalas 
    } = this.state;
    const { dataInicio, setDataInicio, dataFim, setDataFim } = this.props;

    return (
      <div className="pl-5 pt-5">
        <div className="pt-4">
          <div>
            <label className="pr-3">De:</label>
            <input type="date" value={dataInicio} onChange={(evt) => setDataInicio(evt.target.value)}></input>
          </div>
          <div>
            <label className="pt-2 pr-3">Até:</label>
            <input type="date" value={dataFim} onChange={(evt) => setDataFim(evt.target.value)}></input>
          </div>
        </div>

        <div>
          <label className="pr-3">Empresa: </label>
          <select>
            {locatarios.map((locatario) => (
              <option key={locatario.cnpj}>{locatario.nomeFantasia}</option>
            ))}
          </select>
        </div>

        <div className="pt-4">
          <label className="pr-3">Localização: </label>
          <select>
            <option>Todas</option>
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
      </div>
    );
  }
}

export default FiltrosDados;
