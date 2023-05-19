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
    <ul>
      <li>
        <a href="#1" className={classes.active}>FuShing</a>
      </li>
      <li>
        <a href="#2" onClick={showNewYearProduct}>新年裝飾</a>
      </li>
      <li className={classes.dropdown}>
        <a href="#3" onClick={showNewYearProduct} className={classes.dropbtn}>
          萬聖裝飾
        </a>
        <div className={classes.dropdownContent}>
          <a href="#2" onClick={showChristmasProduct}>聖誕裝飾</a>
          <a href="#3">中秋裝飾</a>
          <a href="#4">兒童服飾</a>
          <a href="#5">成年服飾</a>
          <a href="#6">玩具</a>
        </div>
      </li>

      <div className={classes.searchBar}>
        <div style={{ display: "flex", height: "30px" }}>
          <input
            onChange={(e) => setInput(e.target.value)}
            style={{ width: "100px" }}
          />
          <Button onClick={searchProduct}>搜尋產品</Button>
        </div>
      </div>
    </ul>
  );
}

export default Sildebar;
