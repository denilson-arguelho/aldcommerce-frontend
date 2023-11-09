/* Components */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeClient from "./routes/HomeClient";
import Catalog from "./routes/HomeClient/Catalog";
import ProductDetails from "./routes/HomeClient/ProductDetails";
import NotFound from "./routes/HomeClient/ProductDetails/NotFound";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeClient/>}>
            <Route index element={<Catalog/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="product-details/:productId" element={<ProductDetails/>}>
            <Route path="*" element={<NotFound/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
