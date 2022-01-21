import { combineReducers } from "redux";
import { reducer } from "./reducer/reducer";
import { SignUpReducer } from "./reducer/signReducer";
import { vacancyReducer } from "./reducer/vacancyReducer";
import { applyJobReducer } from "./reducer/applyJobReducer";
import { companyReducer } from "./reducer/companyReducer";

export const rootReducer = combineReducers({
  login: reducer,
  sign: SignUpReducer,
  vacancy: vacancyReducer,
  applyJob: applyJobReducer,
  studentProfile: companyReducer,
});

// #s4px-3s0g

// 030183888
