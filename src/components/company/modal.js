import React, { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState();

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Post Job
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Vacancy
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="show-grid modal-body">
              <div className="container">
                <div className="form-group">
                  <label className="labels form-label" for="title">
                    Job Title
                  </label>
                  <input
                    placeholder="Job Title here"
                    name="jobTitle"
                    type="text"
                    id="title"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="title">
                    Job Description
                  </label>
                  <textarea
                    rows="3"
                    name="jobDescription"
                    id="exampleForm.ControlTextarea1"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="gpa">
                    Minimum Gpa Required
                  </label>
                  <input
                    placeholder="Minimum Gpa Required"
                    name="min_gpa"
                    type="number"
                    id="gpa"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="salary">
                    Minimum Salary
                  </label>
                  <input
                    placeholder="Minimum Salary"
                    name="min_salary"
                    type="number"
                    id="salary"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="salary">
                    Last Date to Apply
                  </label>
                  <input
                    placeholder="Last Date to Apply"
                    name="lastDate"
                    type="date"
                    id="lastDateToApply"
                    className="form-control"
                  ></input>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Post Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
