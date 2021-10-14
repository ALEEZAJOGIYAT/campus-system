import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Company = () => {
  const info = useSelector((state) => state.company);

  useEffect(() => {
    console.log("compamy", info);
  }, [info]);

  return (
    <div>
      <h2>LIST OC COMPANIES</h2>
      {info.data.map((user, index) => {
        const { name, email } = user;
        return (
          <div className="card text-center" key={index}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">{email}</p>
              <p className="card-text"></p>
              {/* <span className="button">
                <button
                  type="button"
                  className="btn btn-danger new"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </span> */}
            </div>
            <div className="card-footer text-muted" />
          </div>
        );
      })}
    </div>
  );
};

export default Company;
