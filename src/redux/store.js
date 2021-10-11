import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  //omposeWithDevTools()
);

export default store;
