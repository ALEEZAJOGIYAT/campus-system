import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  let auth = useSelector((state) => state.login);
  let profile = useSelector((state) => state.studentProfile);

  useEffect(() => {
    console.log("auth", profile?.user);
  }, [auth]);

  return (
    <div>
      {auth?.data?.user?.role === "student"
        ? profile?.data?.map(({ user }, index) => {
            return (
              <form className="login-form" key={index}>
                {/* <img className="logo-img" src={img} alt="logo-img" /> */}
                <h3> STUDENT PROFILE </h3>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label  is-invalid"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={user.email}
                  />
                </div>
              </form>
            );
          })
        : profile?.data?.map(({ user }, index) => {
            return (
              <form className="login-form" key={index}>
                {/* <img className="logo-img" src={img} alt="logo-img" /> */}
                <h3> COMPANY USER PROFILE </h3>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label  is-invalid"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={user.email}
                  />
                </div>
              </form>
            );
          })}
    </div>
  );
};

export default StudentProfile;
