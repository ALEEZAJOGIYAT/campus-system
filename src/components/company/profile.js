import React from "react";
import { useSelector } from "react-redux";

const CompanyProfile = () => {
  let auth = useSelector((state) => state.login);
  console.log("knf", auth);

  return (
    <div>
      <h2>COMPANY PROFILE</h2>
      {auth.map((element, index) => (
        <form className="form" key={index}>
          <div className="mb-3-email">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={element.email}
            />
          </div>
          <div className="mb-3-passwrd">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={element.password}
            />
          </div>
        </form>
      ))}
    </div>
  );
};

export default CompanyProfile;
