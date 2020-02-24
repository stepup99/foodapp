const catogoriesReducers = (state = [], action) => {
  switch (action.type) {
    case "GET_CATOGORIES":
      return action.payload;

    default:
      return state;
  }
};

export default catogoriesReducers;
