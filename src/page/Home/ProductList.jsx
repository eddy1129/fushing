import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../store/Table-context";
import "../../App.css";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import PaginationBasic from "../../component/PaginationBasic";
import ProductItem from "../../component/ProductItem";
import Autumn from "../../Product/Autumn";
import Lanterns from "../../Product/Lanterns";
import GlowStick from "../../Product/GlowStick";

export default function ProductList() {
  let { tableItems, all_product, setTableItems } = useContext(TableContext);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [pageCount, setPageCount] = useState(
    Math.ceil(all_product.length / limit)
  );
  const start = (page - 1) * limit;

  const [items, setItems] = useState(all_product);
  const currentData = items.slice(start, start + limit);
  const showGlowStick = () => {
    setItems(GlowStick);
    setPage(1);
    setPageCount(Math.ceil(GlowStick.length / limit));
    window.scrollTo(0, 0);
  };

  const showAutumn = () => {
    setItems(Autumn);
    setPage(1);
    setPageCount(Math.ceil(Autumn.length / limit));
    window.scrollTo(0, 0);
  };

  const showLanterns = () => {
    setItems(Lanterns);
    setPage(1);
    setPageCount(Math.ceil(Lanterns.length / limit));
    window.scrollTo(0, 0);
  };

  const showAll = () => {
    setItems(all_product);
    setPage(1);
    setPageCount(Math.ceil(all_product.length / limit));
    window.scrollTo(0, 0);
  };

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
  }, [showAutumn, showGlowStick, showLanterns, setPage, page]);

  // to

  const isActive = "link active2";

  return (
    <div id="show_container">
      <div className="left_show">
        <div>
          <div className="sidebar">
            <div className="top_section">
              <h1>福成商行</h1>
              <div className="bars"></div>
            </div>
            <NavLink className={isActive} onClick={showAll}>
              <div style={{ display: "block" }} className="link_text">
                全部商品
              </div>
            </NavLink>
            <NavLink className="link" onClick={showLanterns}>
              <div style={{ display: "block" }} className="link_text">
                熒光棒
              </div>
            </NavLink>
            <NavLink className="link" onClick={showAutumn}>
              <div style={{ display: "block" }} className="link_text">
                中秋裝飾
              </div>
            </NavLink>
            <NavLink
              className="link"
              activeclassName="active"
              onClick={showGlowStick}
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
        <div className="">
          <PaginationBasic
            pageCount={pageCount}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}
