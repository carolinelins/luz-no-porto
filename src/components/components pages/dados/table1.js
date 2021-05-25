import React from 'react';
import { Table } from 'reactstrap';

const Table1 = (props) => {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Período</th>
            <th>Dispositivo</th>
            <th>Consumo</th>
            <th>%Consumo</th>
            <th>Comparativo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row" width="10px">2</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default Table1;
