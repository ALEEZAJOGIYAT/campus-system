import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ApplyJob = () => {
  const applyJob = useSelector((state) => state.applyJob);

  useEffect(() => {}, [applyJob]);

  return (
    <>
      <div className="card-header">APPLIED JOBS </div>;
      <div className="flex-container">
        {applyJob.data.map(({ details }, index) => (
          <div className="card text-center" key={index}>
            <div className="card-body">
              <h5 className="card-title">Job Title:{details.title}</h5>
              <p className="card-text">Tentative Salary:{details.salary}</p>
              <p className="card-text">Minimum Gpa Required:{details.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApplyJob;
