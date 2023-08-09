import Sildebar from "../../component/navbar";
import { useContext, useEffect } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import productsData from "../../Product/ProductData";
import ProductItem from "../../component/ProductItem";
import aData from "../../Product/data";

export default function ShowProduct() {
  let params = useParams();
  let dataX;
  let { tableItems, setTableItems } = useContext(TableContext);

  switch (params.product_type) {
    case "New-Year":
      dataX = productsData;
      break;
    case "Autumn":
      dataX = aData;
      break;
    default:
      dataX = productsData;
  }

  useEffect(() => {
    const productsList = dataX.map((item) => {
      return (
        <ProductItem
          key={item.id}
          id={item.id}
          product_type={item.product_type}
          product_name={item.product_name}
          size={item.size}
          price={item.price}
          image={item.image}
        />
      );
    });
    setTableItems(productsList);
  }, [dataX, setTableItems]);

  return (
    <Container>
      <Sildebar />
      <Row xs={1} md={4} className="g-4">
        {tableItems}
      </Row>
    </Container>
  );
}
