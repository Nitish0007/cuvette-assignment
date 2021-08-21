import React from "react";
import Navbar from "../Navbar/Navbar";

import { Link } from "react-router-dom";

import "./style/Listing.css";

function Listing() {
  return (
    <div className="listingpage">
      <Navbar />
      <div className="listingBody">
        <div className="listContainer">
          <Link to="/form1" style={{ textDecoration: "none" }}>
            <p className="addJob">+ Add another job</p>
          </Link>
          <ol className="list">
            <li className="listItem">
              <div>
                <span>Frontend Developer</span>
                <span className="date">23/08/2021</span>
                <span className="enteredDetails">Details</span>
              </div>
            </li>
            <li className="listItem">
              <div>
                <span>Frontend Developer</span>
                <span className="date">23/08/2021</span>
                <span className="enteredDetails">Details</span>
              </div>
            </li>
            <li className="listItem">
              <div>
                <span>Frontend Developer</span>
                <span className="date">23/08/2021</span>
                <span className="enteredDetails">Details</span>
              </div>
            </li>
            <li className="listItem">
              <div>
                <span>Frontend Developer</span>
                <span className="date">23/08/2021</span>
                <span className="enteredDetails">Details</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Listing;
