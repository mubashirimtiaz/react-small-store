import React, { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    document.title = "Small-Store | Cart";
  });
  return (
    <div className="container my-5 pt-5">
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
