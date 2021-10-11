import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/form/login/index";
import SignUp from "./components/form/sign";
//import CompanyProfile from "./components/company/profile";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    // <Provider store={store}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/sign">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
