import React, { Component } from 'react';
import Api from '../../../api';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';

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
    const { locatarios, tiposEquipamentos, localizacaoSalas } = this.state;
    const { dataInicio, setDataInicio, dataFim, setDataFim } = this.props;

    return (
      <div className="pl-5 pt-4">
        <div className="pt-3">
          <div className="input-group mb-3 pt-3">
            <div className="input-group-prepend">
              <label className="input-group-text pr-4">De</label>
            </div>
            <input
              type="date"
              value={dataInicio}
              onChange={(evt) => setDataInicio(evt.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="input-group mb-3 pt-3">
            <div className="input-group-prepend">
              <label className="input-group-text pr-4">Até</label>
            </div>
            <input
              type="date"
              value={dataFim}
              onChange={(evt) => setDataFim(evt.target.value)}
              className="form-control"
            ></input>
          </div>
        </div>

        {/* <div className="pt-4"> */}
        {/* <label className="pr-3">Empresa: </label> */}
        <div className="input-group mb-3 pt-3">
          <div className="input-group-prepend">
            <label className="input-group-text pr-4">Empresa</label>
          </div>
          <select className="custom-select">
            <option>Todas</option>
            {locatarios.map((locatario) => (
              <option disabled key={locatario.cnpj}>
                {locatario.nomeFantasia}
              </option>
              //TODO - options disabled enquanto nao temos requisicao das medicoes por filtro empresa
            ))}
          </select>
        </div>

        <div className="input-group mb-3 pt-3">
          <div className="input-group-prepend">
            <label className="input-group-text pr-4">Localização</label>
          </div>
          <select className="custom-select">
            <option>Todas</option>
            {localizacaoSalas.map((sala) => (
              <option disabled key={sala.id}>
                {sala.nome}
              </option>
              //TODO - options disabled enquanto nao temos requisicao das medicoes por filtro sala
            ))}
          </select>
        </div>

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
              //TODO - options disabled enquanto nao temos requisicao das medicoes por filtro equipamento
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default FiltrosDados;
