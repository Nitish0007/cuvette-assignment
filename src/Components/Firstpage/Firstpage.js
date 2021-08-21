import React from "react";

import "./style/Firstpage.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Firstpage() {
  return (
    <div className="postPage">
      <Navbar />
      <div className="postBody">
        <h1>Hi Company user, Welcome to Cuvette tech</h1>
        <Link to="/forms">
          <button className="postBtn">+ Post a Job</button>
        </Link>
      </div>
    </div>
  );
}

export default Firstpage;
