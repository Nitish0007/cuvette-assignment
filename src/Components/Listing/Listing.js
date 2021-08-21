import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import { Link } from "react-router-dom";

import "./style/Listing.css";

function Listing() {
  const [showModal, setShowmodal] = useState(false);
  const [modalDetails, setModaldetails] = useState({});

  console.log(showModal);
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
                        setModaldetails({ jobData });
                        setShowmodal(!showModal);
                        console.log(modalDetails);
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
            <label>Job Title:</label>
            <p>{modalDetails?.jobData?.jobTitle}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label>Location:</label>
            <p>{modalDetails?.jobData?.location}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label>Skills:</label>
            <p>{modalDetails?.jobData?.skills}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label>Mode:</label>
            <p>{modalDetails?.jobData?.mode}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label>Stipend:</label>
            <p>{modalDetails?.jobData?.stipend?.join(" ")}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label>Start Date:</label>
            <p>{modalDetails?.jobData?.date}</p>
          </div>
          <div style={{ display: "flex" }}>
            <label>Duration:</label>
            <p>{modalDetails?.jobData?.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
