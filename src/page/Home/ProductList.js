import Sildebar from "../../component/navbar";
import classes from "./ProductsList.module.css";
import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Caro from "../../component/Caro";
import Carousel from "react-bootstrap/Carousel";

export default function ProductList() {
  let { tableItems, tableSection } = useContext(TableContext);

  return (
    <>
      <Container>
        <Sildebar />
        <Row xs={1} md={4} className="g-4">
          {tableSection}
        </Row>
      </Container>
    </>
  );
}
