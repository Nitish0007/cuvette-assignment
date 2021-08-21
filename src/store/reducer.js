const initialState = {
  enteredData: {
    jobTitle: "",
    location: "",
    remote: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENTER_DATA": {
      const myState = { ...state };
      myState.enteredData = action.data;
      return myState;
    }
    default:
      return state;
  }
};

export default reducer;
