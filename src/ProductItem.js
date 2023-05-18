import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <div>
      <h1>{props.product_type}</h1>
      <h1>{props.product_name}</h1>
      <h1>{props.size}</h1>
      <h1>{props.price}</h1>
      <Link to={"/product/" + props.id}>
        <img src={props.image} alt={props.product_name} />
      </Link>
    </div>
  );
}
