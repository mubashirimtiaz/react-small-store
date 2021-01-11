import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import "./navbar.css";

const Navbar = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <nav className="navbar-dark fixed-top bg-dark py-2">
      <div className="container d-md-flex justify-content-between align-items-center d-block">
        <div className="text-center">
          <Link className="py-3 lead  text-light font-weight-bold" to="/">
            Small-Store
          </Link>
        </div>
        <div>
          <ul className="ml-auto text-center my-auto p-0">
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
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="contact"
              >
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
      </div>
    </nav>
  );
};

export default Navbar;
