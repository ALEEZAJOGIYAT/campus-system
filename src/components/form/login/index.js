import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, studentProfile } from "../../../redux/action/actions";
import "./style.scss";
import img from "../../../images/Screenshot (4).png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const auth = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser("");

    {
      auth?.data?.user?.role === "student"
        ? history.push("/vacancy")
        : history.push("/alljobs");
      dispatch(studentProfile(user));
    }

    // {
    //   auth?.data?.user?.role === "student"
    //     ? console.log("nothing")
    //     : dispatch(studentProfile(user));
    // }
  };

  useEffect(() => {}, [auth]);

  return (
    <div>
      <form className="login-form">
        <img className="logo-img" src={img} alt="logo-img" />
        <h3> LOGIN FORM </h3>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={user.email}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label is-invalid">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={user.password}
            onChange={handleChange}
            required={true}
          />
        </div>
        <input
          className="radio-button"
          type="checkbox"
          name="role"
          value="student"
          onChange={handleChange}
        />
        Student
        <br />
        <input
          className="radio-buttons"
          type="checkbox"
          name="role"
          value="company"
          onChange={handleChange}
        />
        Company <br />
        <div className="footer">
          <button type="submit" className="btn " onClick={login}>
            Login
          </button>
          <Link className="sign" to="/sign">
            Don't have an account{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
