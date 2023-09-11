import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <Col>
      <Card style={{ marginTop: "10%" }} className="card_margin">
        <Link to={"/product/" + props.product_type + "_" + props.id}>
          <div className="wrapper">
            <Card.Img variant="top" src={props.image} />
          </div>
        </Link>
        <Card.Body className="itemInner">
          <Card.Title>{props.product_name}</Card.Title>
          <Card.Text>
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
