import React from "react";
import classes from "./ProductItem.module.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (


    <Link to={"/product/" + props.id}>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={props.image}
            alt={props.product_name}
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{props.product_type}</MDBCardTitle>
            <MDBCardText>
              {props.product_name}
              {props.size}
              {props.price}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>
  );
}
