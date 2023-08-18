import Sildebar from "../../component/navbar";
import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import productsData from "../../Product/ProductData";
import aData from "../../Product/Adata";
import Lanterns from "../../Product/Lanterns";
import GlowStick from "../../Product/GlowStick";
import ProductItem from "../../component/ProductItem";
import PaginationBasic from "../../component/PaginationBasic";

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

  const [page, setPage] = useState(1);
  const limit = 8;
  const pageCount = Math.ceil(dataX.length / limit);
  const start = 0 + (page - 1) * limit;
  const currentData = dataX.slice(start, start + limit);
 



  useEffect(() => {
    const productsList = currentData.map((item) => {
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
  }, [dataX, setTableItems,setPage,page]);

  return (
    <Container>
      <Sildebar />
      <Row xs={1} md={4} className="g-1">
        {tableItems}
        <PaginationBasic pageCount={pageCount} page={page} setPage={setPage} />
      </Row>
    </Container>
  );
}
