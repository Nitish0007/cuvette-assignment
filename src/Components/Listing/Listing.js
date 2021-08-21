import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import { Link } from "react-router-dom";

import "./style/Listing.css";

function Listing() {
  const [showModal, setShowmodal] = useState(false);
  const [modalDetails, setModaldetails] = useState({});

  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="listingpage">
      <Navbar />
      <div className="listingBody" onClick={() => setShowmodal(!showModal)}>
        <div className="listContainer">
          <Link to="/forms" style={{ textDecoration: "none" }}>
            <p className="addJob">+ Add another job</p>
          </Link>
          <ol className="list">
            {data?.map((jobData, i) => {
              return (
                <li className="listItem" key={i}>
                  <div className="itemContainer">
                    <span className="title">{jobData.jobTitle}</span>
                    <span className="date">{jobData.date}</span>
                    <span
                      className="enteredDetails"
                      onClick={() => {
                        setModaldetails(jobData);
                        setShowmodal(!showModal);
                      }}
                    >
                      Details
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div
          className="detailModal"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div style={{ display: "flex" }}>
            <label className="bold">Job Title:</label>
            <p>{modalDetails.jobTitle}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label className="bold">Location:</label>
            <p>{modalDetails.location}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label className="bold">Skills:</label>
            <p>
              {modalDetails.skills &&
                Object.keys(modalDetails.skills)
                  .map((key) => modalDetails.skills[key].value)
                  .join(" ")}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <label className="bold">Mode:</label>
            <p>{modalDetails.mode}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label className="bold">Stipend:</label>
            <p>{modalDetails.stipend?.join(" ")}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label className="bold">Start Date:</label>
            <p>{modalDetails.date}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label className="bold">Duration:</label>
            <p>{modalDetails.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
