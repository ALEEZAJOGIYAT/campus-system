import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import "./style.scss";

const AllJobs = () => {
  let job = useSelector((state) => state.vacancy);
  //const dispatch = useDispatch();

  useEffect(() => {
    //console.log("job?.data", job?.data);
  }, [job]);

  return (
    <div>
      <div className="card-header">AVAILABLE JOBS</div>
      {job?.data?.map(({ details }, index) => {
        const { title, salary, gpa, date } = details;
        return (
          <div className="card text-center" key={index}>
            <div className="card-body">
              <h5 className="card-title">Job Title:{title}</h5>
              <p className="card-text">Tentative Salary:{salary}</p>
              <p className="card-text">Minimum Gpa Required:{gpa}</p>
              <span className="button">
                {/* <button type="button" className="btn btn-danger new">
                  Applied Students
                </button> */}
                <button type="button" className="btn btn-danger new">
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
  );
};

export default AllJobs;