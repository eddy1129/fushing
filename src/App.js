import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Title.js";

function App() {
  return (
    <BrowserRouter>
      <Title fuck="fuck" />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/product" element={<ProductDetail />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="*" element={<p>找不到頁面</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
