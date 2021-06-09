import React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
   CardBody
} from 'reactstrap';

const Card1 = (props) => {
  return (
    <CardDeck>
      <Card style={{ width: '20rem' }}>
        <CardBody>
          <CardTitle tag="h5" style={{textAlign:'center'}}>Consumo Médio</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      <Card style={{ width: '20rem',height:'8rem' }}>
        <CardBody>
          <CardTitle tag="h5" style={{textAlign:'center'}}>Redução de Consumo</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      <Card style={{ width: '20rem' }}>
        <CardBody>
          <CardTitle tag="h5" style={{textAlign:'center'}}>Redução de Emissões</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Card1;