import Sildebar from "../../component/navbar";
import { useContext, useState, useEffect } from "react";
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

  useEffect(() => {
    const productsList = productsData.map((item) => {
      console.log(`item.id ${item.id} params = ${params.product_type}`);
      if (item.product_type == params.product_type) {
        return (
          <ProductItem
            key={item.id}
            id={item.id}
            product_type={item.product_type}
            product_name={item.product_name}
            size={item.size}
            price={item.price}
            image={item.image}
            width={300}
          />
        );
      } else {
        return null; // or any other alternative component or JSX you want to render for other items
      }
    });
    setTableItems(productsList);
  }, []);

  return (
    <Container>
      <Sildebar />
      <Row xs={1} md={4} className="g-4">
        {tableItems}
      </Row>
    </Container>
  );
}
