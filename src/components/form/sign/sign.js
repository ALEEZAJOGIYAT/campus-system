import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../../images/Screenshot (4).png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./sign.scss";
import { signUpUsers } from "../../../redux/action/actions";

const SignUp = () => {
  const [users, setUsers] = useState({
    names: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const signAuth = useSelector((state) => state.sign);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log("signAuth", signAuth);
  }, [signAuth]);

  const handleChange = (e) => {
    setUsers(e.target.value);
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSign = (e) => {
    e.preventDefault();

    dispatch(signUpUsers(users));
    setUsers("");
    history.push("/company");
  };

  return (
    <form className="sign-form">
      <img className="logo-img" src={img} alt="logo-img" />
      <h3> Sign Up</h3>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="names"
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          value={users.names}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={users.email}
          onChange={handleChange}
          required={true}
        />
      </div>
      <input
        className="radio-button"
        type="checkbox"
        name="role"
        value={users.email}
      />{" "}
      Student
      <br />
      <input
        className="radio-buttons"
        type="checkbox"
        name="role"
        value={users.email}
      />{" "}
      Company <br />
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          value={users.password}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          id="exampleInputPassword"
          value={users.confirmPassword}
          onChange={handleChange}
          required={true}
        />
      </div>
      {/* <Link to="/company"> */}
      <button type="submit" className="btn btn-primary " onClick={handleSign}>
        Sign Up
      </button>
      {/* </Link> */}
      <Link className="login" to="/login">
        Already have an account{" "}
      </Link>
    </form>
  );
};

export default SignUp;
