import React, { Component } from 'react';
import api from '../../../api';
import Grid from '@material-ui/core/Grid';
import EcoIcon from '@material-ui/icons/Eco';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
// import Moment from 'moment';
// import { Card, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

class Card2 extends Component {
  constructor() {
    super();

    var anoAtual = new Date().getFullYear();
    //var mesAtual = new Date().getMonth() + 1;
    var ultimoMes = new Date().getMonth().toString();
    var penultimoMes = (new Date().getMonth() - 1).toString();
    var antepenultimoMes = (new Date().getMonth() - 2).toString();
    if (ultimoMes.length === 1) {
      ultimoMes = '0' + ultimoMes;
    }
    if (penultimoMes.length === 1) {
      penultimoMes = '0' + penultimoMes;
    }
    if (antepenultimoMes.length === 1) {
      antepenultimoMes = '0' + antepenultimoMes;
    }

    var periodoUltimoConsumo = `${anoAtual}-${penultimoMes}-01/${anoAtual}-${ultimoMes}-01`;
    var periodoPenultimoConsumo = `${anoAtual}-${antepenultimoMes}-01/${anoAtual}-${penultimoMes}-01`;

    this.state = {
      periodoUltimoConsumo: periodoUltimoConsumo,
      periodoPenultimoConsumo: periodoPenultimoConsumo,
      ultimoConsumoTotal: [],
      penultimoConsumoTotal: [],
      reducaoConsumo: [],
      status: [],
    };
  }

  async componentDidMount() {
    const responseUltimoConsumo = await api.get(
      `/medicoes/buscarPorPeriodo/${this.state.periodoUltimoConsumo}`,
    );
    console.log('responseUltimoConsumo', responseUltimoConsumo.data);
    this.setState({
      ultimoConsumoTotal: responseUltimoConsumo.data.valorTotalDoPeriodo,
    });

    const responsePenultimoConsumo = await api.get(
      `/medicoes/buscarPorPeriodo/${this.state.periodoPenultimoConsumo}`,
    );
    console.log('responsePenultimoConsumo', responsePenultimoConsumo.data);
    this.setState({
      penultimoConsumoTotal: responsePenultimoConsumo.data.valorTotalDoPeriodo,
    });

    this.setState({
      reducaoConsumo: (
        ((parseFloat(this.state.ultimoConsumoTotal) -
          parseFloat(this.state.penultimoConsumoTotal)) /
          parseFloat(this.state.penultimoConsumoTotal)) *
        100
      ).toFixed(2),
    });

    if (this.state.reducaoConsumo > 0) {
      this.setState({
        status: 'aumento',
      });
    } else if (this.state.reducaoConsumo < 0) {
      this.setState({
        status: 'redução',
      });
    } else {
      this.setState({
        status: 'estável',
      });
    }
  }

  render() {
    return (
      <div>
        <div className="card bg-light m-4 text-warning">
          <FlashOnIcon
            style={{ fontSize: 50, position: 'relative', top: '30%' }}
          />
          <div style={{ position: 'relative', left: '30%', bottom: '20%' }}>
            <p>Último Consumo:</p>
            <p>{this.state.ultimoConsumoTotal}</p>
          </div>
        </div>
        <div className="card bg-light m-4 text-info">
          <TrendingDownIcon
            style={{ fontSize: 50, position: 'relative', top: '30%' }}
          />
          <div style={{ position: 'relative', left: '30%', bottom: '20%' }}>
            <p>{this.state.status} de Consumo</p>
            <p>{this.state.reducaoConsumo}%</p>
          </div>
        </div>
        <div className="card bg-light m-4 text-success">
          <EcoIcon style={{ fontSize: 50, position: 'relative', top: '30%' }} />
          <div style={{ position: 'relative', left: '30%', bottom: '20%' }}>
            <p>Redução de CO2</p>
            <p>---- t/C02</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Card2;
