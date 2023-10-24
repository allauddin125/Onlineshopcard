import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";//react-icon use
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/home"><span className="log-sig">Login/SignUp</span></Link>
        <Link to="/cart">
          <ShoppingCart className="card"/>
        </Link>
      </div>
    </div>
  );
};
