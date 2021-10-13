import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
//import { createLogger } from "redux-logger";
import logger from "redux-logger";
//import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
  //composeWithDevTools()
);

export default store;
