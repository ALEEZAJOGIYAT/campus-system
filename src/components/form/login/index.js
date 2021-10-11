import React, { useState } from "react";
import { useHistory } from "react-router";
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
  console.log("djned", auth);

  //const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    //setUser(e.target.value);
    const email = e.target.email;
    const value = e.target.value;
    setUser({ email: email }, { password: value });
  };

  return (
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
          value={user.email}
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
          value={user.password}
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
        className="btn btn-primary"
        onClick={() => {
          dispatch(addUser(user));
          setUser("");
        }}
      >
        Submit
      </button>
      <Link className="sign" to="./sign">
        Don't have an account{" "}
      </Link>
    </form>
  );
};
export default Login;
