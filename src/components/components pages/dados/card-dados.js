import React from 'react';
import { Card, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

const Card1 = (props) => {
  return (
    // <div className="card bg-light text-dark m-3">
    // <div id="chart" className="card-body">
    <CardDeck>
      {/* <Card style={{ width: '20rem' }}> */}
      <Card className="card bg-light text-dark m-3">
        <CardBody>
          <CardTitle tag="h5" style={{ textAlign: 'center' }}>
            Consumo Total
          </CardTitle>
          <CardText>5.687kWh</CardText>
        </CardBody>
      </Card>
      {/* <Card style={{ width: '20rem', height: '8rem' }}> */}
      <Card className="card bg-light text-dark m-3">
        <CardBody>
          <CardTitle tag="h5" style={{ textAlign: 'center' }}>
            Redução de Consumo
          </CardTitle>
          <CardText>1245kWh</CardText>
        </CardBody>
      </Card>
      {/* <Card style={{ width: '20rem' }}> */}
      <Card className="card bg-light text-dark m-3">
        <CardBody>
          <CardTitle tag="h5" style={{ textAlign: 'center' }}>
            Redução de Emissões
          </CardTitle>
          <CardText>----t/CO2</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Card1;
