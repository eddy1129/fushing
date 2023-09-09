import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../store/Table-context";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import productsData from "../../Product/ProductData";
import Autumn from "../../Product/Autumn";
import Lanterns from "../../Product/Lanterns";
import GlowStick from "../../Product/GlowStick";
import ProductItem from "../../component/ProductItem";
import PaginationBasic from "../../component/PaginationBasic";
import "../../App.css";
import { NavLink } from "react-router-dom";

export default function ShowProduct() {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
    },
    {
      path: "/display/GlowStick",
      name: "display/GlowStick",
    },
  ];

  let params = useParams();
  let product_menu;
  let { tableItems, setTableItems } = useContext(TableContext);
  switch (params.product_type) {
    case "GlowStick":
      product_menu = GlowStick;
      break;
    case "Autumn":
      product_menu = Autumn;
      break;
    case "Lanterns":
      product_menu = Lanterns;
      break;
    default:
      product_menu = productsData;
  }

  const [page, setPage] = useState(1);
  const limit = 8;
  const pageCount = Math.ceil(product_menu.length / limit);
  const start = 0 + (page - 1) * limit;
  const currentData = product_menu.slice(start, start + limit);

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
  }, [product_menu, setTableItems, setPage, page]);

  return (
    <div id="show_container">
      <div className="left_show">
        <div>
          <div className="sidebar">
            <div className="top_section">
              <h1 style={{ display: "block" }} className="logo">
                Logo
              </h1>
              <div style={{ marginLeft: "50px" }} className="bars"></div>
            </div>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div style={{ display: "block" }} className="link_text">{item.name}</div>
              </NavLink>
            ))}
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