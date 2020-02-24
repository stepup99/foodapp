import catogoriesReducers from "./categories";
import { combineReducers } from "redux";

export const masterReducer = combineReducers({
  catogories: catogoriesReducers
});
