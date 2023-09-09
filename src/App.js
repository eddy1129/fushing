import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import ProductList from "./page/Home/ProductList";
import { TableContext } from "./store/Table-context";
import { useState } from "react";
import productsSection from "./Product/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductSection from "./component/ProductSection";
import ShowProduct from "./page/Selected/ShowProduct";
import "./App.css";
import Autumn from "./Product/Autumn";
import Lanterns from "./Product/Lanterns";
import GlowStick from "./Product/GlowStick";

function App() {

  console.log("Autumn",Autumn)
  console.log("Lanterns",Lanterns)
  console.log("GlowStick",GlowStick)


  const all_product = [
    ...Autumn,
    ...Lanterns,
    ...GlowStick
  ]


  const sections = productsSection.map((item) => (
    <ProductSection
      key={item.id}
      id={item.id}
      product_type={item.product_type}
      product_name={item.product_name}
      size={item.size}
      price={item.price}
      image={item.image}
    />
  ));

  const [tableItems, setTableItems] = useState([]);
  const [tableSection] = useState(sections);

  return (
    <BrowserRouter>
      <TableContext.Provider
        value={{ tableSection, tableItems, setTableItems }}
      >
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product" element={<ProductDetail />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/display" element={<ShowProduct />}>
            <Route path=":product_type" element={<ShowProduct />} />
          </Route>
          <Route path="*" element={<p>404 not found</p>} />
        </Routes>
      </TableContext.Provider>
    </BrowserRouter>
  );
}

export default App;
