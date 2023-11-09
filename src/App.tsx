/* Components */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeClient from "./routes/HomeClient";
import Catalog from "./routes/HomeClient/Catalog";
import ProductDetails from "./routes/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeClient/>}>
            <Route index element={<Catalog/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="product-details" element={<ProductDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
