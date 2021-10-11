import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/form/login/index";
import SignUp from "./components/form/sign/sign";
import CompanyProfile from "./components/company/profile";
import Vacancy from "./components/company/vacancies";
import store from "./redux/store";
import { Provider } from "react-redux";
import NavBar from "./components/form/navbar/navBar";
function App() {
  return (
    // <Provider store={store}>
    <Provider store={store}>
      <Router>
        {!(
          window.location.pathname === "/login" ||
          window.location.pathname === "/sign"
        ) && <NavBar />}

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
        <Switch>
          <Route exact path="/company">
            <Vacancy />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/companyprofile">
            <CompanyProfile />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
