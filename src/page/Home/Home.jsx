import { useContext, useEffect, useState, useCallback } from "react";
import { TableContext } from "../../store/Table-context";
import "../../App.css";

import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import PaginationBasic from "../../component/PaginationBasic";
import ProductItem from "../../component/ProductItem";
import Autumn from "../../Product/Autumn";
import Lanterns from "../../Product/Lanterns";
import GlowStick from "../../Product/GlowStick";

export default function Home() {
  let { tableItems, all_product, setTableItems } = useContext(TableContext);
  const [activeLink, setActiveLink] = useState("allproduct");

  const [page, setPage] = useState(1);
  const limit = 12;
  const [pageCount, setPageCount] = useState(
    Math.ceil(all_product.length / limit)
  );
  const start = (page - 1) * limit;

  const [items, setItems] = useState(all_product);
  const currentData = items.slice(start, start + limit);

  const showTable = useCallback(
    (value) => {
      let product_item;
      switch (value) {
        case "showGlowStick":
          product_item = GlowStick;
          break;
        case "Lanterns":
          product_item = Lanterns;
          break;
        case "Autumn":
          product_item = Autumn;
          break;
        default:
          product_item = all_product;
          break;
      }

      setItems(product_item);
      setPage(1);
      setPageCount(Math.ceil(product_item.length / limit));
      document.querySelector("#bgc").scrollTop = 0;
      setActiveLink(value); // Set the active link
    },
    [all_product]
  );

  useEffect(() => {
    const productsList = items.map((item) => {
      /* const productsList = currentData.map((item) => { */
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
  }, [showTable, currentData, setTableItems, setPage, page]);

  return (
    <div id="bgc">
      <div className="left_show">
        <div>
          <div className="sidebar">
            <div className="top_section">
              <img src="/favicon.ico" alt="logo" />
            </div>
            <NavLink
              className={`link ${activeLink === "allproduct" ? "active2" : ""}`}
              onClick={() => showTable("allproduct")}
            >
              <div style={{ display: "block" }} className="link_text">
                全部商品
              </div>
            </NavLink>
            <NavLink
              className={`link ${
                activeLink === "showGlowStick" ? "active2" : ""
              }`}
              onClick={() => showTable("showGlowStick")}
            >
              <div style={{ display: "block" }} className="link_text">
                熒光棒
              </div>
            </NavLink>
            <NavLink
              className={`link ${activeLink === "Autumn" ? "active2" : ""}`}
              onClick={() => showTable("Autumn")}
            >
              <div style={{ display: "block" }} className="link_text">
                中秋裝飾
              </div>
            </NavLink>

            <NavLink
              className={`link ${activeLink === "Lanterns" ? "active2" : ""}`}
              onClick={() => showTable("Lanterns")}
            >
              <div style={{ display: "block" }} className="link_text">
                燈籠
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="right_show">
        <Row xs={1} md={3} className="g-4">
          {tableItems}
        </Row>

        {/* <PaginationBasic
            pageCount={pageCount}
            page={page}
            setPage={setPage}
          /> */}
      </div>
    </div>
  );
}
