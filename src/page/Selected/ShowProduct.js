import Sildebar from "../../component/navbar";
import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import productsData from "../../Product/ProductData";
import ProductItem from "../../component/ProductItem";

export default function ShowProduct() {
  let params = useParams();

  let { tableItems, setTableItems } = useContext(TableContext);

  return (
    <Container>
      <Sildebar />
      <Row xs={1} md={4} className="g-4">
        {tableItems}
      </Row>
    </Container>
  );
}
