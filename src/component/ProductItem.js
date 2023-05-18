import React from "react";
import classes from "./ProductItem.module.css";

import { Link } from "react-router-dom";


export default function ProductItem(props) {
  return (
    <div className={classes.item}>
      <Link to={"/product/" + props.id}>
        <img src={props.image} alt={props.product_name} style={{width:"500px"}}/>
      </Link>
      <p>{props.product_type}</p>
      <p>{props.product_name}</p>
      <p>{props.size}</p>
      <p>{props.price}</p>
    </div>
  );
}
