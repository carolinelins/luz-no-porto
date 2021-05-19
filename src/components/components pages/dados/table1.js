import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Api from '../../../api';

class Table1 extends Component {
  state = {
    medicoes: [],
  };

  async componentDidMount() {
    const responseMedicao = await Api.get('/medicoes');

    this.setState({ medicoes: responseMedicao.data });
  }

  render() {
    const { medicoes } = this.state;

    return (
      <div>
        <Table className="table-striped table-condensed table-responsive">
          <thead>
            <tr>
              <th>id</th>
              <th>Inicio Medição</th>
              <th>Fim Medição</th>
              <th>Consumo(kWh)</th>
            </tr>
          </thead>
          <tbody>
            {medicoes.map((medicao) => (
              <tr>
                <td key={medicao.id}>{medicao.id}</td>
                <td>{medicao.inicioMedicao}</td>
                <td>{medicao.fimMedicao}</td>
                <td>{medicao.valor}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Table1;
