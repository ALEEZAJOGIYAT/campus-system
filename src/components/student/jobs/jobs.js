import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { applyJobs } from "../../../redux/action/actions";
import "./style.scss";
import { useHistory } from "react-router";

const AllJobs = () => {
  let job = useSelector((state) => state.vacancy);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    //console.log("job?.data", job?.data);
  }, [job]);
  const handleJob = (details, id) => {
    dispatch(applyJobs(details, id));
    history.push("/applyjobs");
  };

  return (
    <>
      <div className="card-header">AVAILABLE JOBS</div>
      <div className="flex-container">
        {job?.data?.map(({ details, id }, index) => {
          const { title, salary, gpa, date } = details;
          return (
            <div className="card text-center" key={index}>
              <div className="card-body">
                <h5 className="card-title">Job Title:{title}</h5>
                <p className="card-text">Tentative Salary:{salary}</p>
                <p className="card-text">Minimum Gpa Required:{gpa}</p>
                <span className="buton">
                  <button
                    type="button"
                    className="btn btn-dark apply"
                    onClick={() => handleJob(details, id)}
                  >
                    Apply Here
                  </button>
                </span>
              </div>
              <div className="card-footer text-muted">
                Last Date to apply:{date}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllJobs;
