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
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
