/* Components */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomeClient from "./routes/HomeClient";
import Catalog from "./routes/HomeClient/Catalog";
import ProductDetails from "./routes/HomeClient/ProductDetails";



import Cart from "./routes/HomeClient/Cart";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeClient/>}>
            <Route index element={<Catalog/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="product-details/:productId" element={<ProductDetails/>}>
            
           
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
