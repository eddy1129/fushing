import Sildebar from "../../component/navbar";
import classes from "./ProductsList.module.css";
import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ProductList() {
  let { tableItems } = useContext(TableContext);

  return (
    <>
      <Container>
        <Sildebar />
        {true == true ? <div></div> : <div></div>}
        <Row xs={1} md={2} className="g-4">
          {tableItems}
        </Row>
      </Container>
    </>
  );
}
