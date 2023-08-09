import Sildebar from "../../component/navbar";
import { useContext, useEffect } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import productsData from "../../Product/ProductData";
import aData from "../../Product/Adata";
import Lanterns from "../../Product/Lanterns";
import GlowStick from "../../Product/GlowStick";
import ProductItem from "../../component/ProductItem";

export default function ShowProduct() {
  let params = useParams();
  let dataX;
  let { tableItems, setTableItems } = useContext(TableContext);

  switch (params.product_type) {
    case "GlowStick":
      dataX = GlowStick;
      break;
    case "Autumn":
      dataX = aData;
      break;
    case "Lanterns":
      dataX = Lanterns;
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
