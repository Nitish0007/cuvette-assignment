import React, { useState } from "react";

import "./style/Form1.css";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";

function Form1(props) {
  const [remote, setRemote] = useState(props.data?.remote || false);
  const [jobTitle, setJobtitle] = useState(props.data?.jobTitle || "");
  const [location, setLocation] = useState(props.data?.location || "");
  const [error, setError] = useState("");

  const registerData = () => {
    if (!jobTitle || (!location && !remote)) {
      setError("All fields are required");
      return;
    } else {
      setError("");
    }

    props.setData({
      jobTitle,
      location,
      remote: remote,
    });

    props.changeComp("form2");
  };

  return (
    <div className="form1">
      <Navbar />
      <div className="form1Body">
        <div className="popup">
          <div className="input">
            <label>Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => {
                setJobtitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="input">
            <label>Job Location</label>
            <input
              className="locationField"
              placeholder="Enter job location"
              value={location}
              disabled={remote}
              type="text"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            ></input>
          </div>
          <div className=" checkboxes">
            <div>
              <input
                type="checkbox"
                checked={remote}
                onClick={() => {
                  setRemote(!remote);
                }}
              ></input>
              <label>This job is remote</label>
            </div>
          </div>
          <div className="btnContainer">
            <button className="nextBtn" onClick={registerData}>
              Next
            </button>
          </div>

          <p style={{ fontWeight: "bold", color: "red" }}>{error}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.enteredData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) =>
      dispatch({
        type: "ENTER_DATA",
        data,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form1);
