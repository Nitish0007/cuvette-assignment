import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import "./Slider.css";

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

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 40]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
