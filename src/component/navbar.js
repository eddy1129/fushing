import { useState, useEffect, useContext } from "react";
import { TableContext } from "../store/Table-context";
import classes from "./navbar.module.css";
import ProductItem from "./ProductItem";
import productsData from "../Product/ProductData";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Sildebar() {
  let { setTableItems } = useContext(TableContext);
  let [input, setInput] = useState("");

  useEffect(() => {
    if (input.length > 4) console.log("Long");
    else console.log("Short");
  }, [input]);

  const showNewYearProduct = () => {
    const newYearProduct = productsData.map((item) =>
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

    setTableItems(newYearProduct);
  };

  const showChristmasProduct = () => {
    const christmasProduct = productsData.map((item) =>
      item.product_type === "Christmas" ? (
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

    setTableItems(christmasProduct);
  };

  const searchProduct = () => {
    console.log(input);
    const productsList = productsData.map((item) =>
      item.product_name.toLowerCase().includes(input.toLowerCase()) ? (
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

    setTableItems(productsList);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="./favicon.ico"
            style={{ width: "100px", borderRadius: "20" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ background: "url(/listbtn.png)", paddingTop: "12px" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" onClick={showChristmasProduct}>
              中秋裝飾
            </Nav.Link>
            <Nav.Link href="#action2" onClick={showChristmasProduct}>
              螢光棒
            </Nav.Link>
            <Nav.Link href="#action2" onClick={showChristmasProduct}>
              燈籠
            </Nav.Link>
            <Nav.Link href="#action2" onClick={showChristmasProduct}>
              靜電貼
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="搜尋商品"
              className="me-3"
              aria-label="Search"
              onChange={(e) => setInput(e.target.value)}
              style={{ width: "150px" }}
            />
            <Button variant="outline-success" onClick={searchProduct}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sildebar;
