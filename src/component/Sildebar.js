import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { TableContext } from "../store/Table-context";
import ProductItem from "./ProductItem";
import productsData from "../Product/ProductData";

function Sildebar() {
  let { setTableItems } = useContext(TableContext);

  let [input, setInput] = useState("");

  useEffect(() => {
    if (input.length > 4) console.log("字串夠長");
    else console.log("字串太短");
  }, [input]);

  const showNewYearProduct = () => {
    const init_productsList = productsData.map((item) =>
      item.product_type === "New-Year" ? (
        <ProductItem
          key={item.id}
          id={item.id}
          product_type={item.product_type}
          product_name={item.product_name}
          size={item.size}
          price={item.price}
          image={item.image}
        />
      ) : null
    );

    setTableItems(init_productsList);
  };

  const showChristmasProduct = () => {
    const init_productsList = productsData.map((item) =>
      item.product_name.includes(input) ? (
        <ProductItem
          key={item.id}
          id={item.id}
          product_type={item.product_type}
          product_name={item.product_name}
          size={item.size}
          price={item.price}
          image={item.image}
        />
      ) : null
    );

    setTableItems(init_productsList);
  };

  const searchProduct = () => {
    console.log(input)
    const init_productsList = productsData.map((item) =>
      item.product_name.includes(input) ? (
        <ProductItem
          key={item.id}
          id={item.id}
          product_type={item.product_type}
          product_name={item.product_name}
          size={item.size}
          price={item.price}
          image={item.image}
        />
      ) : null
    );

    setTableItems(init_productsList);
  };

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <InputGroup
        size="sm"
        className="mb-3"
        style={{ width: "200px", marginLeft: "10px" }}
      >
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button style={{ marginLeft: "20px" }} onClick={searchProduct}>
          搜尋產品
        </Button>
      </InputGroup>
      <Nav.Link onClick={showNewYearProduct}>新年裝飾</Nav.Link>
      <Nav.Link onClick={showChristmasProduct}>聖誕裝飾</Nav.Link>
      <Nav.Link onClick={showNewYearProduct}>萬聖裝飾 </Nav.Link>
      <Nav.Link onClick={showChristmasProduct}>中秋裝飾</Nav.Link>
      <Nav.Link onClick={showNewYearProduct}>兒童服飾</Nav.Link>
      <Nav.Link onClick={showChristmasProduct}>成年服飾</Nav.Link>
      <Nav.Link onClick={showNewYearProduct}>玩具</Nav.Link>
    </Nav>
  );
}

export default Sildebar;
