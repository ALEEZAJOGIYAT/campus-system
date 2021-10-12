import { combineReducers } from "redux";
import { reducer } from "./reducer/reducer";
import { SignUpReducer } from "./reducer/reducer";
import { vacancyReducer } from "./reducer/vacancyReducer";

export const rootReducer = combineReducers({
  login: reducer,
  sign: SignUpReducer,
  vacancy: vacancyReducer,
});
