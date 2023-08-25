import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export default function ProductSection(props) {
  return (
    <Col id="mainPage">
      <Card className="main_item">
        <Link to={"/display/" + props.product_type}>
          <Card.Img src={props.image} alt="Card image" className="test"/>
          <Card.ImgOverlay>
            <Card.Title className="main_item_text">{props.product_name}</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.ImgOverlay>
        </Link>
      </Card>
    </Col>
  );
}
