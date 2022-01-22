import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Company = () => {
  let auth = useSelector((state) => state.login);
  let profile = useSelector((state) => state.studentProfile);

  useEffect(() => {
    console.log("auth", auth?.user);
  }, [auth]);

  return (
    <div>
      <div className="card-header">COMAPNIES</div>

      {auth?.data?.user?.role === "company"
        ? profile?.data?.map(({ user }, index) => {
            return (
              <div className="card text-center" key={index}>
                <div className="card-body">
                  <p className="card-text">Name:{user.email}</p>
                </div>
                <div className="card-footer text-muted"></div>
              </div>
            );
          })
        : profile?.data?.map(({ user }, index) => {
            return (
              <div>
                <h3>NO JOBS POSTED </h3>
              </div>
            );
          })}
    </div>
  );
};

export default Company;
