import React, { createContext, useState } from "react";
import { allProducts } from "../store";
export const ProductContext = createContext(allProducts);

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(allProducts);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
