import React, { useState } from "react";
import img from "../../../images/Screenshot (4).png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./style.scss";

const SignUp = () => {
  const [users, setUsers] = useState({
    firstName: "",
    email: "",
    password: "",
    //confirmPassword: "",
  });

  console.log(users);

  const history = useHistory();

  const handleChange = (e) => {
    setUsers(e.target.value);
    const name = e.target.name;
    const email = e.target.email;
    const value = e.target.value;
    //const value = e.target.value;
    setUsers(
      { firstName: name },
      { email: email },
      { password: value }
      //{ confirmPassword: value }
    );
  };

  return (
    <form className="sign-form" onSubmit={() => history.push("./companies")}>
      <img className="logo-img" src={img} alt="logo-img" />
      <h3> Sign Up</h3>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          value={users.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={users.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={users.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={users.password}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary "
        // onClick={() => {
        //   dispatch(addUser(user));
        //   setUser("");
        // }}
      >
        Submit
      </button>
      <Link className="login" to="./login">
        Already have an account{" "}
      </Link>
    </form>
  );
};

export default SignUp;
