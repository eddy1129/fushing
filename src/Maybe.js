/* import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import productsData from "./Product/ProductData";
import ProductItem from "./component/ProductItem"; 
 import aData from "./Product/data.js";
 
export default function Maybe() {
    let params = useParams();

  const productsList = productsData.map((item) => {
    if (item.product_type === "New-Year") {
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
    } else {
      return null; // or any other alternative component or JSX you want to render for other items
    }
  });

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {productsList}
      </Row>
    </Container>
  ); 
}*/
