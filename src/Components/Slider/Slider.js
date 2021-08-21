import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import "./Slider.css";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: 300,
    markLabel: {
      fontSize: "5px",
    },
  },
});

const marks = [
  {
    value: 5,
    label: "INR 5k",
  },
  {
    value: 20,
    label: "20k",
  },
  {
    value: 50,
    label: "50k",
  },
  {
    value: 100,
    label: "INR 100k",
  },
];

function valuetext(value) {
  return `${value}k`;
}

function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 40]);

  let timer;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const debounce = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        props.setStipend({
          stipend: value,
        });
      }, 500);
    };
    debounce();
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        min={5}
        max={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
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
    setStipend: (data) =>
      dispatch({
        type: "ENTER_STIPEND",
        data,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider);
