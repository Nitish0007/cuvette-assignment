import React, { useState, useEffect } from "react";

import "./style/Form2.css";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import arrow from "../used/Vector.png";

import Select from "react-select";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Form2(props) {
  const skills = [
    { value: "ReactJS", label: "ReactJS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Angular", label: "Angular" },
    { value: "Python", label: "Python" },
  ];

  const [skill, setSkill] = useState(props.data?.value || "");
  const [mode, setMode] = useState(props.data?.mode || "");
  const [date, setDate] = useState(props.data?.date || "");
  const [duration, setDuration] = useState(props.data?.duration || "");
  const [desc, setDesc] = useState(props.data?.desc || "");
  const [error, setError] = useState("");

  const registerDetails = () => {
    if (!skill || !mode || !date || !duration || !desc) {
      setError("All fields are required");
      return;
    } else {
      setError("");
    }
    props.setData2({
      skills: skill,
      mode,
      date,
      duration,
      desc,
    });

    const prevData = JSON.parse(localStorage.getItem("data")) || [];
    console.log(prevData);
    prevData.push(props.data);
    console.log(prevData);
    localStorage.setItem("data", JSON.stringify(prevData));
  };

  return (
    <div className="form2">
      <Navbar />
      <div className="form2Body">
        <div className="detailContainer">
          <div className="top">
            <img
              src={arrow}
              onClick={() => props.changeComp("form1")}
              alt="back"
            ></img>

            <p>#intern details</p>
          </div>
          <div className="details">
            <div className="inputContainer">
              <label>Skills</label>
              <div className="selectComponent">
                <Select
                  placeholder="Start typing and select the tab"
                  isMulti
                  name="skills"
                  options={skills}
                  onChange={(skill) => {
                    const mySkills = { ...skill };
                    setSkill(mySkills);
                  }}
                />
              </div>
            </div>
            <div className="inputContainer">
              <label>Mode</label>
              <div className="checkbox">
                <div className="option">
                  <input
                    type="checkbox"
                    name="part"
                    readOnly
                    onClick={() => {
                      setMode("");
                      setMode("part");
                    }}
                    checked={mode === "part" ? "checked" : ""}
                  />
                  <label>
                    Part-time <p>20hrs/week</p>
                  </label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    name="semifull"
                    readOnly
                    onClick={() => {
                      setMode("");
                      setMode("semifull");
                    }}
                    checked={mode === "semifull" ? "checked" : ""}
                  />
                  <label>
                    Semi Full-time <p>40hrs/week</p>
                  </label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    name="full"
                    readOnly
                    onClick={() => {
                      setMode("");
                      setMode("full");
                    }}
                    checked={mode === "full" ? "checked" : ""}
                  />
                  <label>
                    Full-time <p>60hrs/week</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="inputContainer">
              <label>Stipend Range</label>
              <div>
                <Slider />
              </div>
            </div>
            <div className="inputContainer">
              <label>Start Date</label>
              <input
                placeholder="dd/mm/yyy"
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
              <label>Duration</label>
              <input
                type="text"
                style={{ width: "3rem" }}
                onChange={(e) => setDuration(e.target.value)}
              />
              <p> months</p>
            </div>
            <div className="inputContainer">
              <div className="description">
                <label>Job Description</label>
                <textarea
                  type="text"
                  multiline="true"
                  placeholder={`Enter job description
Try to be as precise as possible(250-300 words)
1.
2.
3. `}
                  style={{
                    padding: "0.3rem",
                    height: "300px",
                    width: "400px",
                    color: "rgba(0, 0, 0, 0.37)",
                    fontWeight: "medium",
                    textAlign: "start",
                    border: "1px solid #e5e5e5e",
                  }}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="btnSection">
            <Link to="/mylistings">
              <button onClick={registerDetails}>Post</button>
            </Link>
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
    setData2: (data) =>
      dispatch({
        type: "ENTER_DATA_FORM2",
        data,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form2);
