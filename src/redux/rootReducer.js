import { combineReducers } from "redux";
import { reducer } from "./reducer/reducer";
import { SignUpReducer } from "./reducer/signReducer";
import { vacancyReducer } from "./reducer/vacancyReducer";
import { applyJobReducer } from "./reducer/applyJobReducer";

export const rootReducer = combineReducers({
  login: reducer,
  sign: SignUpReducer,
  vacancy: vacancyReducer,
  applyJob: applyJobReducer,
});
