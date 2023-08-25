import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


import { Link } from "react-router-dom";

export default function DetailBox(props) {
  return (
    <Col >
      <Card style={{ width: '35rem' }} className="detailtest">
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.product_name}</Card.Title>
            <Card.Text>
              {props.size}<br/>
              {props.price}
            </Card.Text>
            <Button variant="primary"> <Link to="/" className="linkcolor">返回主目錄</Link></Button>
          </Card.Body>
        </Card>
    </Col>
  );
}
