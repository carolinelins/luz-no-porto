import React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
   CardBody
} from 'reactstrap';

const Card1 = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Consumo Médio</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Redução de Consumo</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Redução de Emissões</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Card1;