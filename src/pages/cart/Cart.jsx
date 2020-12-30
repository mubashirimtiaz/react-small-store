import React, { useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  console.log(cartProducts);
  useEffect(() => {
    document.title = "Small-Store | Cart";
  }, []);
  return (
    <div className="container my-5 pt-5">
      <div className="row">
        {cartProducts.map((product) => {
          return (
            <div className="col-md-12 card p-0 my-2" key={product.id}>
              <div className="row">
                <div className="col-md-2">
                  <img
                    src={product.imageUrl}
                    alt={product.imageUrl}
                    height="150"
                    width="180"
                  />
                </div>
                <div className="col-md-7 m-auto">
                  <p className="lead"> {product.name.toUpperCase()}</p>
                  <h5>${product.price}</h5>
                </div>
                <div className="col-md-3">Qty</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
