import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import ProductList from "./page/Home/ProductList";
import { TableContext } from "./store/Table-context";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Autumn from "./Product/Autumn";
import Lanterns from "./Product/Lanterns";
import GlowStick from "./Product/GlowStick";
import ProductItem from "./component/ProductItem";

function App() {

  console.log("Autumn",Autumn)
  console.log("Lanterns",Lanterns)
  console.log("GlowStick",GlowStick)


  const all_product = [
    ...Autumn,
    ...Lanterns,
    ...GlowStick
  ]


  const sections = all_product.map((item) => (
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
 

  const [tableItems, setTableItems] = useState(sections);

  
  return (
    <BrowserRouter>
      <TableContext.Provider
        value={{  tableItems, setTableItems, all_product }}
      >
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product" element={<ProductDetail />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<p>404 not found</p>} />
        </Routes>
      </TableContext.Provider>
    </BrowserRouter>
  );
}

export default App;
