import React, { Component } from 'react';
import api from '../../../api';
import Grid from '@material-ui/core/Grid';
// import Moment from 'moment';
// import { Card, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

class Card1 extends Component {
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
      <Grid container>
        <div className="card bg-light col-sm-4 m-3 text-dark ">
          <p>Último Consumo:</p>
          <p>{this.state.ultimoConsumoTotal}</p>
        </div>
        <div className="card bg-light col-sm-4 m-3 text-dark ">
          <p>{this.state.status} de Consumo</p>
          <p>{this.state.reducaoConsumo}%</p>
        </div>
        <div className="card bg-light col-sm-3 m-3 text-dark ">
          <p>Redução de CO2</p>
          <p>---- t/C02</p>
        </div>
      </Grid>
      // <div className="card bg-light text-dark m-3">
      // <div id="chart" className="card-body">
    );
  }
}
export default Card1;

// const Card1 = (props) => {
//   return (
//     // <div className="card bg-light text-dark m-3">
//     // <div id="chart" className="card-body">
//     <CardDeck>
//       {/* <Card style={{ width: '20rem' }}> */}
//       <Card className="card bg-light text-dark m-3">
//         <CardBody>
//           <CardTitle tag="h5" style={{ textAlign: 'center' }}>
//             Consumo Total
//           </CardTitle>
//           <CardText>5.687kWh</CardText>
//         </CardBody>
//       </Card>
//       {/* <Card style={{ width: '20rem', height: '8rem' }}> */}
//       <Card className="card bg-light text-dark m-3">
//         <CardBody>
//           <CardTitle tag="h5" style={{ textAlign: 'center' }}>
//             Redução de Consumo
//           </CardTitle>
//           <CardText>1245kWh</CardText>
//         </CardBody>
//       </Card>
//       {/* <Card style={{ width: '20rem' }}> */}
//       <Card className="card bg-light text-dark m-3">
//         <CardBody>
//           <CardTitle tag="h5" style={{ textAlign: 'center' }}>
//             Redução de Emissões
//           </CardTitle>
//           <CardText>----t/CO2</CardText>
//         </CardBody>
//       </Card>
//     </CardDeck>
//   );
// };

// export default Card1;
