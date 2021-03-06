import React, { useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { cartProducts, dispatch } = useContext(CartContext);
  const totalAmount = cartProducts.reduce(
    (acc, { qty, price }) => (acc += price * qty),
    0
  );
  useEffect(() => {
    document.title = "Small-Store | Cart";
  }, []);
  const clearCart = () => {
    dispatch({ type: "Clear_Cart" });
  };
  const handleInc = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: { ...product } });
  };
  const handleDec = (prodID) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: prodID });
  };
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  const handleCheckout = () => {
    dispatch({ type: "Clear_Cart" });
    navigate("/checkout", { replace: true });
  };
  return (
    <div className="container my-5 pt-5">
      {cartProducts.length ? (
        <div className="row">
          <div className="col-md-12 text-right">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          <div className="card-deck">
            {cartProducts
              .sort((a, b) => b.price - a.price)
              .map((product) => {
                return (
                  <div className="col-md-4 my-3" key={product.id}>
                    <div className="card shadow-sm">
                      <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.name}
                        height="300"
                        width="300"
                      />
                      <div className="card-body">
                        <h6 className="card-title mb-4 font-weight-bold">
                          {product.name.toUpperCase()}
                        </h6>
                        <div className="d-flex align-item-center justify-content-between">
                          <h5 className="my-auto w-50">${product.price}</h5>
                          <div className="d-flex justify-content-center align-item-between w-50">
                            <p
                              style={{ cursor: "pointer" }}
                              className="lead m-auto"
                              onClick={() => handleDec(product.id)}
                            >
                              -
                            </p>
                            <p className="lead mx-3 m-auto">{product.qty}</p>
                            <p
                              style={{ cursor: "pointer" }}
                              className="lead m-auto"
                              onClick={() => handleInc(product)}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="div col-md-4">
            <button className="btn btn-outline-info" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
          <div className="col-md-8 text-right">
            Total : <span className="lead"> ${totalAmount} </span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="lead">There is no Product is your cart!</p>
            <button
              className="btn btn-outline-danger btn-lg"
              onClick={handleClick}
            >
              Go to Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
