import React, { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer/cartReducer";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartProducts, dispatch] = useReducer(cartReducer, [], () => {
    return JSON.parse(localStorage.getItem("cartProducts") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);
  return (
    <CartContext.Provider value={{ cartProducts, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
