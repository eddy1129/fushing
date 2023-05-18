import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import ProductList from "./page/Home/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./component/Title.js";

function App() {
  return (
    <BrowserRouter>
     <Title topic="FuShing" />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product" element={<ProductDetail />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="*" element={<p>找不到頁面</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
