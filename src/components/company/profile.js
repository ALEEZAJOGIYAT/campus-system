import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import img from "../../images/Screenshot (4).png";

const CompanyProfile = () => {
  let auth = useSelector((state) => state.login);
  console.log("frrf", auth);

  useEffect(() => {
    console.log("AUTH", auth);
  }, [auth]);

  return (
    <div>
      {auth.data.map((element) => (
        <div>
          <form className="login-form">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={element.email}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={element.password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login as company
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default CompanyProfile;
