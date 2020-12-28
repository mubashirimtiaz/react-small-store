import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ProductContext } from "../../context/productsContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);
  console.log(products);
  const handleClick = (product) =>
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: product.id,
        name: product.fields.name,
        imageUrl: product.fields.image[0].url,
        price: product.fields.price,
      },
    });
  return (
    <div className="container my-5">
      <h1>Products</h1>
      <div className="row">
        <div className="card-deck">
          {products.map((product) => {
            return (
              <div className="col-md-4" key={product.id}>
                <div className="card">
                  <img
                    src={product.fields.image[0].url}
                    className="card-img-top"
                    alt={product.fields.name}
                    height="300"
                    width="300"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.fields.name.toUpperCase()}{" "}
                      <span className="small mx-3 bg-danger text-light rounded px-2 py-1">
                        {" "}
                        {product.fields.company}{" "}
                      </span>
                    </h5>
                    <p className="card-text lead">
                      <sup>$</sup>
                      {product.fields.price}
                    </p>
                    <p className="card-text text-right small">
                      <button className="btn btn-sm btn-danger mr-2">
                        Watch
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleClick(product)}
                      >
                        Add to cart
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
