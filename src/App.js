import React from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import "./App.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import ProductContextProvider from "./context/productsContext";
import CartContextProvider from "./context/cartContext";
import ProductDetail from "./pages/product_detail/ProductDetail";
import WatchProduct from "./components/watch_product/WatchProducts";
import Checkout from "./pages/checkout/Checkout";
import NotFound from "./pages/not_found/NotFound";
const App = () => {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="checkout" element={<Checkout />} />
            <Route path="details" element={<ProductDetail />}>
              <Route path=":prodID" element={<WatchProduct />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
