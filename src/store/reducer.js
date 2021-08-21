const initialState = {
  enteredData: {
    location: "",
    remote: false,
    jobTitle: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENTER_DATA": {
      const myState = { ...state };

      myState.enteredData.jobTitle = action.data.jobTitle;
      myState.enteredData.location = action.data.location;
      myState.enteredData.remote = action.data.remote;
      return myState;
    }
    default:
      return state;
  }
};

export default reducer;
