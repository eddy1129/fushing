import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import ProductList from "./page/Home/ProductList";
import { TableContext } from "./store/Table-context";
import { useState } from "react";
import ProductItem from "./component/ProductItem";
import productsData from "./Product/ProductData";
import productsSection from "./Product/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductSection from "./component/ProductSection";
import ShowProduct from "./page/Selected/ShowProduct";
import Sidebar from "./component/Sidebar";
import "./App.css";

function App() {
  const init_productsList = productsData.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      product_type={item.product_type}
      product_name={item.product_name}
      size={item.size}
      price={item.price}
      image={item.image}
    />
  ));

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

  const [tableItems, setTableItems] = useState(init_productsList);
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
