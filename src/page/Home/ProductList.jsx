import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import "../../App.css";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  let { tableSection } = useContext(TableContext);

  const menuItem = [
    {
      path: "/",
      name: "熒光捧",
    },
    {
      path: "/display/GlowStick",
      name: "display/GlowStick",
    },
  ];

  return (
    <>
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
                <div style={{ display: "block" }} className="link_text">
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="right_show">
        <Row>{tableSection}</Row>
      </div>
    </>
  );
}
