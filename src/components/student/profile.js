import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  const [close, setClose] = useState(false);

  let auth = useSelector((state) => state.login);
  let profile = useSelector((state) => state.studentProfile);

  useEffect(() => {}, [auth]);

  return (
    <div>
      {auth?.data?.user?.role === "student"
        ? profile?.data?.map(({ user }, index) => {
            return (
              <div tabindex="-1" key={index}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">STUDENT PROFILE</h5>
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        <div className="form-group">
                          <label className="labels form-label" for="title">
                            Email Address
                          </label>
                          <input
                            placeholder="Email Title here"
                            name="title"
                            type="text"
                            id="title"
                            className="form-control"
                            value={user.email}
                          />
                        </div>
                        <div className="form-group">
                          <label className="labels form-label" for="title">
                            Description
                          </label>
                          <textarea
                            rows="3"
                            name="jobDescription"
                            id="exampleForm.ControlTextarea1"
                            className="form-control"
                          />
                        </div>
                      </div>
                      {/* <p>{user.email}</p> */}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-dark">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : profile?.data?.map(({ user }, index) => {
            return (
              <div tabindex="-1" key={index}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">COMPANY PROFILE</h5>
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        <div className="form-group">
                          <label className="labels form-label" for="title">
                            Email Address
                          </label>
                          <input
                            placeholder="Email Title here"
                            name="title"
                            type="text"
                            id="title"
                            className="form-control"
                            value={user.email}
                          />
                        </div>
                        <div className="form-group">
                          <label className="labels form-label" for="title">
                            Description
                          </label>
                          <textarea
                            rows="3"
                            name="jobDescription"
                            id="exampleForm.ControlTextarea1"
                            className="form-control"
                          />
                        </div>
                      </div>
                      {/* <p>{user.email}</p> */}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-dark">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default StudentProfile;
