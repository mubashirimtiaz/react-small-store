import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const Navbar = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand  font-weight-bold" to="/">
          Small-Store
        </Link>

        <ul className="navbar-nav ml-auto mt-2  mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link bg-danger p-2 ml-md-3 rounded text-light font-weight-bold"
              activeClassName="active"
              to="cart"
            >
              Cart <sup>{cartProducts.length}</sup>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
