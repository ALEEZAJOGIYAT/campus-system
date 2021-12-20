import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Company = () => {
  let auth = useSelector((state) => state.login);
  let profile = useSelector((state) => state.company);

  useEffect(() => {
    console.log("auth", profile?.user);
  }, [profile]);

  return (
    <div>
      <div className="card-header">COMAPNIES</div>
      {/* {auth?.data?.user?.role === "company"
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
            <Link to="/studentprofile"></Link>;
            return (
              <div className="card text-center" key={index}>
                <div className="card-body">
                  <p className="card-text">Email:{user.email}</p>
                </div>
                <div className="card-footer text-muted"></div>
              </div>
            );
          })} */}
    </div>
  );
};

export default Company;
