import catogoriesReducers from "./categories";
// import SetOrderReducer from "./orders";
import { combineReducers } from "redux";

export const masterReducer = combineReducers({
  catogories: catogoriesReducers
  // setorder: SetOrderReducer
});
