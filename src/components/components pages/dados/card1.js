import React from 'react';
import Form from 'react-bootstrap/form';



function Card1(){
    return(
        
        <Form>
            <h3>Dados Energéticos</h3>
  <Form.Group controlId="exampleForm.SelectCustom">
  <div className="d-flex justify-content-center">
    <Form.Label>Dispositivo</Form.Label>
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </div>
    <div className="d-flex justify-content-center">
    <Form.Label>Empresa</Form.Label>
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </div>
    <div className="d-flex justify-content-center">
    <Form.Label>Localização</Form.Label>
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </div>
    <div className="d-flex justify-content-center">
    <Form.Label>Período</Form.Label>
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </div>
  </Form.Group>
</Form>

    );
};

export default Card1;