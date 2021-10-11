import { combineReducers } from "redux";
import { reducer } from "./reducer/reducer";

export const rootReducer = combineReducers({
  login: reducer,
});
