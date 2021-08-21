import React from "react";
import { Link } from "react-router-dom";

import "./style/Navbar.css";
import logo from "../used/cuvette tech logo - 1.png";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo"></img>
      <Link to="/mylistings" style={{ textDecoration: "none" }}>
        <span className="navbar_right">My Listings</span>
      </Link>
    </div>
  );
}

export default Navbar;
