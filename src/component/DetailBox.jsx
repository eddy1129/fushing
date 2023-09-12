import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function DetailBox(props) {
  return (
    <div id="deatil_main">
      <Card style={{ width: "18rem" }} className="detail_card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.product_name}</Card.Title>
          <Card.Text>{props.size}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.size}</ListGroup.Item>
          <ListGroup.Item>{props.size}</ListGroup.Item>
          <ListGroup.Item>{props.size}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to="/">返回主目錄</Link>
        </Card.Body>
      </Card>
    </div>
  );
}
