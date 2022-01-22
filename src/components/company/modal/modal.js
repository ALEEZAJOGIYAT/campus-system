import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postJob } from "../../../redux/action/actions";
import "./modal.scss";

const Modal = () => {
  const [vacancy, setVacancy] = useState({
    title: "",
    discription: "",
    gpa: "",
    salary: "",
    date: "",
  });

  // let job = useSelector((state) => state.vacancy);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("job", job);
  // }, [job]);

  const handleChange = (e) => {
    setVacancy({
      ...vacancy,
      [e.target.name]: e.target.value,
    });
  };

  const post = (e) => {
    e.preventDefault();
    dispatch(postJob(vacancy));
    // console.log("jebde", vacancy);
    setVacancy("");
  };

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
                    name="title"
                    type="text"
                    id="title"
                    className="form-control"
                    value={vacancy.title}
                    onChange={handleChange}
                    required={true}
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
                    required={true}
                  />
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="gpa">
                    Minimum Gpa Required
                  </label>
                  <input
                    placeholder="Minimum Gpa Required"
                    name="gpa"
                    type="number"
                    id="gpa"
                    className="form-control"
                    value={vacancy.gpa}
                    onChange={handleChange}
                    required={true}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="salary">
                    Minimum Salary
                  </label>
                  <input
                    placeholder="Minimum Salary"
                    name="salary"
                    type="number"
                    id="salary"
                    className="form-control"
                    value={vacancy.salary}
                    onChange={handleChange}
                    required={true}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="labels form-label" for="salary">
                    Last Date to Apply
                  </label>
                  <input
                    placeholder="Last Date to Apply"
                    name="date"
                    type="date"
                    id="lastDateToApply"
                    className="form-control"
                    value={vacancy.date}
                    onChange={handleChange}
                    required={true}
                  ></input>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary cancel"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn  job" onClick={post}>
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
