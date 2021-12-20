import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/form/login/index";
import SignUp from "./components/form/sign/sign";
import NavBar from "./components/form/navbar/navBar";

import Vacancy from "./components/company/vacancy/vacancies";
import CompanyProfile from "./components/company/profile";

import { useSelector } from "react-redux";
//student pages
import AllJobs from "./components/student/jobs/jobs";
import ApplyJob from "./components/student/jobs/applyJob";
import Company from "./components/student/company";
import StudentProfile from "./components/student/profile";

import { useEffect } from "react";

function App() {
  const auth = useSelector((state) => state.login);

  useEffect(() => {
    console.log("AUTH", auth.data.role);
  }, [auth]);

  return (
    <div className="App">
      <Router>
        {/* {!(
          window.location.pathname === "/" ||
          window.location.pathname === "/sign"
        ) && <NavBar />} */}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/sign" component={SignUp} />

          <div>
            <NavBar />

            <Route path="/vacancy" component={Vacancy} />
            <Route path="/companyprofile" component={StudentProfile} />

            {/* STUDENT PAGE */}
            <Route path="/company" component={Company} />
            <Route path="/alljobs" component={AllJobs} />
            <Route path="/applyjobs" component={ApplyJob} />
            <Route path="/studentprofile" component={StudentProfile} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
