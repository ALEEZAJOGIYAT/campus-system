import { combineReducers } from "redux";
import { reducer } from "./reducer/reducer";
import { SignUpReducer } from "./reducer/reducer";

export const rootReducer = combineReducers({
  login: reducer,
  sign: SignUpReducer,
});
