import React, { Component } from 'react';
import Api from '../../../api';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import { Button } from 'react-bootstrap'

class FiltrosDados extends Component {
  state = {
    locatarios: [],
    tiposEquipamentos: [],
    localizacaoSalas: [],
    inputDataInicio: '2020-05-14',
    inputDataFim: '2020-05-15'
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
    const { setDataInicio, setDataFim } = this.props;

    function mudarIntervaloDatas(dataInicio, dataFim) {
      if (dataInicio > dataFim) {
        return alert("A data inicial deve ser anterior à final.")
      }

      const fim = new Date(dataFim)
      const inicio = new Date(dataInicio)
      if (fim - inicio > 2592000000) {
        return alert("O intervalo entre as datas não deve ser superior a 30 dias!")
      }

      setDataInicio(dataInicio)
      setDataFim(dataFim)
    }

    return (
      <div className="pl-5 pt-4">
        <div className="pt-3">
          <div className="input-group mb-3 pt-3">
            <div className="input-group-prepend">
              <label className="input-group-text pr-4">De</label>
            </div>
            <input
              type="date"
              value={this.state.inputDataInicio}
              onChange={(evt) => this.setState({ inputDataInicio: evt.target.value })}
              className="form-control"
            ></input>
          </div>
          <div className="input-group mb-3 pt-3">
            <div className="input-group-prepend">
              <label className="input-group-text pr-4">Até</label>
            </div>
            <input
              type="date"
              value={this.state.inputDataFim}
              onChange={(evt) => this.setState({ inputDataFim: evt.target.value })}
              className="form-control"
            ></input>
          </div>
          <Button variant="primary" onClick={() => mudarIntervaloDatas(this.state.inputDataInicio, this.state.inputDataFim)}>Gerar</Button>
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
