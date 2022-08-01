import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar_main">
      <Link className="nav-logo" to="/">Landkit.</Link>
      <ul className="nav-items">
      <Link className="nav-items" to="/">Landings</Link>
      <Link className="nav-items" to="/">Pages</Link>
      <Link className="nav-items" to="/">Account</Link>
      <Link className="nav-items" to="/">Documentation</Link>
        
      </ul>
      <Link className="btn-buynow pointer" to="/Tent">Buy now</Link>
    </div>
  );
};

export default NavBar;
