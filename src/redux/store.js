import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const saveToLocalStorage = (state) => {
  try {
    const serilazedState = JSON.stringify(state);
    localStorage.setItem("state", serilazedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serilazedState = JSON.parse(localStorage.getItem("state"));
    if (serilazedState === null) return undefined;
    return serilazedState;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const presistedState = loadFromLocalStorage();
export const store = createStore(
  rootReducer,
  presistedState,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
