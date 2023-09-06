import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export default function ProductSection(props) {
  return (
    <Col >
      <Card >
        <Link to={"/display/" + props.product_type}>
          
            <Card.Img src={props.image} alt="Card image"  style={{display:"block", width:"100%"}}/>
         
        </Link>
        <Card.Body >
          <Card.Title >{props.product_name}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>

      </Card>
    </Col>
  );
}
