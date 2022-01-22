import { combineReducers } from "redux";
import { loginReducer } from "./reducer/loginReducer";
import { SignUpReducer } from "./reducer/signReducer";
import { vacancyReducer } from "./reducer/vacancyReducer";
import { applyJobReducer } from "./reducer/applyJobReducer";
import { studentProfileReducer } from "./reducer/stuProfileReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  sign: SignUpReducer,
  vacancy: vacancyReducer,
  applyJob: applyJobReducer,
  studentProfile: studentProfileReducer,
});

// #s4px-3s0g

// 030183888
