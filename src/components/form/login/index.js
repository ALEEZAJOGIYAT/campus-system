import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../redux/action/actions";
import "./style.scss";
import img from "../../../images/Screenshot (4).png";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const auth = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser("");
  };

  useEffect(() => {
    console.log("AUTH", auth);
  }, [auth]);

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
          <label for="exampleInputPassword1" className="form-label">
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
        <button type="submit" className="btn btn-primary" onClick={login}>
          Login
        </button>

        <Link className="sign" to="/sign">
          Don't have an account{" "}
        </Link>
      </form>
    </div>
  );
};
export default Login;
