import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/productsContext";

const WatchProduct = () => {
  const { prodID } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const handleNavigate = () => {
    navigate("/", { replace: true });
  };
  const watchedProduct = products.find(({ id }) => id === prodID);

  if (!watchedProduct) {
    return (
      <div className="container my-5 pt-5 ">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="display-4">Product not Found</p>
            <button className="btn btn-outline-info" onClick={handleNavigate}>
              Go back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">
            <img
              src={watchedProduct.fields.image[0].url}
              className="card-img-top"
              alt={watchedProduct.fields.image[0].id}
              height="400"
            />
            <div className="card-body">
              <h5 className="card-title">
                {watchedProduct.fields.name.toUpperCase()}
              </h5>
              <p className="card-text">${watchedProduct.fields.price}</p>
              <p className="card-text text-right">
                <button className="btn btn-outline-danger">Add to Cart</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchProduct;
