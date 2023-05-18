import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import ProductList from "./page/Home/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./component/Title.js";
import { TableContext } from "./store/Table-context";
import { useState } from 'react';
import ProductItem from "./component/ProductItem";
import productsData from "./Product/ProductData"


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

  const [tableItems, setTableItems] = useState(init_productsList)
  
  return (
    <BrowserRouter>
      <TableContext.Provider value={{tableItems,setTableItems}}>
        <Title topic="FuShing" />
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
