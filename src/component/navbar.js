import { Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { TableContext } from "../store/Table-context";
import ProductItem from "./ProductItem";
import productsData from "../Product/ProductData";
import classes from "./navbar.module.css";

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
    <ul className={classes.sidenav}>
      <li>
        <a className={classes.active} href="#home">
          FuShing
        </a>
      </li>
      <li>
        <a onClick={showNewYearProduct}>新年裝飾</a>
      </li>
      <li>
        <a onClick={showChristmasProduct}>聖誕裝飾</a>
      </li>
      <li>
        <a onClick={showNewYearProduct}>萬聖裝飾</a>
      </li>
      <li>
        <a onClick={showChristmasProduct}>中秋裝飾</a>
      </li>
      <li>
        <a onClick={showNewYearProduct}>兒童服飾</a>
      </li>
      <li>
        <a onClick={showChristmasProduct}>成年服飾</a>
      </li>
      <li>
        <a onClick={showNewYearProduct}>玩具</a>
      </li>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "100px" }}
        />
        <Button style={{ marginLeft: "20px" }} onClick={searchProduct}>
          搜尋產品
        </Button>
      </div>
    </ul>
  );
}

export default Sildebar;
