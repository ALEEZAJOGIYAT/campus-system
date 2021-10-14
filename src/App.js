import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/form/login/index";
import SignUp from "./components/form/sign/sign";

import CompanyProfile from "./components/company/profile";
import Vacancy from "./components/company/vacancy/vacancies";

import { useSelector } from "react-redux";
import NavBar from "./components/form/navbar/navBar";

//student pages
import AllJobs from "./components/student/jobs/jobs";
import ApplyJob from "./components/student/jobs/applyJob";
import Company from "./components/student/company";
import { useEffect } from "react";

function App() {
  const auth = useSelector((state) => state.login);

  useEffect(() => {
    console.log("AUTH", auth.data.role);
  }, [auth]);

  return (
    // <Provider store={store}>

    <Router>
      {!(
        window.location.pathname === "/" || window.location.pathname === "/sign"
      ) && <NavBar />}

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign" component={SignUp} />

        <Route path="/vacancy" component={Vacancy} />
        <Route path="/companyprofile" component={CompanyProfile} />

        {/* STUDENT PAGE */}
        <Route path="/student" component={Company} />
        <Route path="/alljobs" component={AllJobs} />
        <Route path="/applyjobs" component={ApplyJob} />
      </Switch>
    </Router>
  );
}

export default App;
