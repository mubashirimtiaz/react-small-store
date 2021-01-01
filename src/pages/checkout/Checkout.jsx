import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <p>Your Order has been placed</p>
          <Link to="/">
            <button className="btn btn-outline-success">Go Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
