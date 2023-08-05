import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <Col>
      <Card>
        <Link to={"/product/" + props.id}>
          <Card.Img variant="top" src={props.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.product_name}</Card.Title>
          <Card.Text>
            {props.product_type}
            {props.size}
            {props.price}
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
