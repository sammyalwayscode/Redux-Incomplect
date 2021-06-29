import { MovieReducer } from "./ReducerState";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  movie: MovieReducer,
});
