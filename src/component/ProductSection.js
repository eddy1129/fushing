import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export default function ProductSection(props) {
  return (
    <Col>
      <Card style={{ marginTop: "10%" }}>
        <Link to={"/display/" + props.product_type}>
          <Card.Img variant="top" src={props.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.product_name}</Card.Title>
          <Card.Text>
            {props.product_type}
            <br />
            {props.size}
            <br />
            {props.price}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
