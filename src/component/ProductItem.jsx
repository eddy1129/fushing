import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <div className="item_main">
      <Link to={"/product/" + props.product_type + "_" + props.id}>
        <div className="wrapper">
          <Card.Img src={props.image} />
          <p className="itemInner">
            <p>{props.product_name}</p>
            <p>{props.size}</p>
            <p>{props.price}</p>
          </p>
        </div>
      </Link>
    </div>
  );
}
