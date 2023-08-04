import { useState, useEffect, useContext } from "react";
import { TableContext } from "../store/Table-context";
import ProductItem from "./ProductItem";
import productsData from "../Product/ProductData";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import classes from "../component/navbar.module.css";
import Figure from 'react-bootstrap/Figure';




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
    <div>
      {/* <ul>
        <li>
          <a href="#1" className={classes.active}>
            FuShing
          </a>
        </li>

        <li className={classes.dropdown}>
          <a href="#3" onClick={showNewYearProduct} className={classes.dropbtn}>
            產品列表
          </a>
          <div className={classes.dropdownContent}>
            <a href="#2" onClick={showChristmasProduct}>
              萬聖裝飾
            </a>
            <a href="#2" onClick={showChristmasProduct}>
              聖誕裝飾
            </a>
            <a href="#3">中秋裝飾</a>
            <a href="#3">新年裝飾</a>
            <a href="#4">兒童服飾</a>
            <a href="#5">成年服飾</a>
            <a href="#6">玩具</a>
          </div>
        </li>
        <li className={classes.searchBar}>
          <a href="#6">
            <input
              placeholder="搜尋商品"
              onChange={(e) => setInput(e.target.value)}
              style={{ width: "100px" }}
              onKeyPress={searchProduct}
            />

          </a>
        </li>
      </ul> */}
      <>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="/favicon.ico"
      />
      <Figure.Caption>
      </Figure.Caption>
    </Figure>
        <Navbar className={classes.hi}>
          <Container>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Brand text</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Sildebar;
