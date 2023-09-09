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
  const [pageCount, setPageCount] = useState(Math.ceil(all_product.length / limit));
  const start = 0 + (page - 1) * limit;

  const [items, setItems ] = useState(all_product) 
  const currentData = items.slice(start, start + limit);
  const goA = () => {
    setItems(GlowStick)
    setPageCount(Math.ceil(GlowStick.length / limit))
  }

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
  }, [goA,setTableItems, setPage, page]);

  // to

  const isActive = "link active2"


  return (
    <div id="show_container">
      <div className="left_show">
        <div>
          <div className="sidebar">
            <div className="top_section">
              <h1>福成商行</h1>
              <div className="bars"></div>
            </div>
            <NavLink className={isActive} activeclassName="">
              <div style={{ display: "block" }} className="link_text">
                全部商品
              </div>
            </NavLink>
            <NavLink className="link" activeclassName="active">
              <div style={{ display: "block" }} className="link_text">
                熒光棒
              </div>·
            </NavLink>
            <NavLink className="link" >
              <div style={{ display: "block" }} className="link_text">
                中秋裝飾
              </div>
            </NavLink>
            <NavLink className="link" activeclassName="active" onClick={goA}>
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
        <Row>
          <PaginationBasic
            pageCount={pageCount}
            page={page}
            setPage={setPage}
          />
        </Row>
      </div>
    </div>
  );
}
