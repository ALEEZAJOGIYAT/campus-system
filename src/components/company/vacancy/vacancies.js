import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteJobs } from "../../../redux/action/actions";
import "./style.scss";

const Vacancy = () => {
  let job = useSelector((state) => state.vacancy);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("job?.data", job?.data);
  }, [job]);

  const handleDelete = (id) => {
    dispatch(deleteJobs(id));
  };

  return (
    <>
      <div className="card-header">VACANCIES</div>
      <div className="flex-container">
        {job?.data?.map(({ details, id }, index) => {
          const { title, salary, gpa, date } = details;
          return (
            <div className="flex-container">
              <div className="card text-center" key={index}>
                <div className="card-body">
                  <h5 className="card-title">Job Title:{title}</h5>
                  <p className="card-text">Tentative Salary:{salary}</p>
                  <p className="card-text">Minimum Gpa Required:{gpa}</p>
                  <span className="button">
                    <button
                      type="button"
                      className="btn btn-danger new"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
                <div className="card-footer text-muted">
                  Last Date to apply:{date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Vacancy;
