import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initialState = {
  enteredData: {
    jobTitle: "",
    location: "",
    remote: false,
    skills: [],
    mode: "",
    stipend: [],
    date: "",
    duration: "",
    desc: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENTER_DATA_FORM1": {
      const myState = { ...state };

      myState.enteredData.jobTitle = action.data.jobTitle;
      myState.enteredData.location = action.data.location;
      myState.enteredData.remote = action.data.remote;
      return myState;
    }
    case "ENTER_DATA_FORM2": {
      const myState = { ...state };

      myState.enteredData.skills = action.data.skills;
      myState.enteredData.mode = action.data.mode;
      myState.enteredData.stipend = action.data.stipend;
      myState.enteredData.date = action.data.date;
      myState.enteredData.duration = action.data.duration;
      myState.enteredData.desc = action.data.desc;
      return myState;
    }

    case "ENTER_STIPEND": {
      const myState = { ...state };

      myState.enteredData.stipend = action.data.stipend;
      return myState;
    }

    default:
      return state;
  }
};

export default reducer;
