/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import Modal from "../../company/modal/modal";
import { useDispatch, useSelector } from "react-redux";
//import { addUser } from "../../../redux/action/actions";

const navItemsStudent = [
  { name: "Company", route: "/company" },
  { name: "All Jobs", route: "/alljobs" },
  { name: "Applied Jobs", route: "/applyjobs" },
  { name: "Profile", route: "/studentprofile" },
];

const navItemsCompany = [
  { name: "Vacancies", route: "/vacancy" },
  { name: "Profile", route: "/companyprofile" },
];

const NavBar = () => {
  const auth = useSelector((state) => state.login);
  //const dispatch = useDispatch();

  useEffect(() => {
    console.log("AUTH", auth);
  }, [auth]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          CRS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {auth?.data?.user?.role === "company"
              ? navItemsCompany.map((items) => (
                  <Link to={items.route}>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page">
                        {items.name}
                      </a>
                    </li>
                  </Link>
                ))
              : navItemsStudent.map((item) => (
                  <Link to={item.route}>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page">
                        {item.name}
                      </a>
                    </li>
                  </Link>
                ))}
          </ul>
          {auth?.data?.user?.role === "company" ? (
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn new">
                    <Modal />
                  </button>
                  <Link to="/">
                    <button className="btn btn-outline-primary">Logout</button>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/">
              <button className="btn btn-outline-primary">Logout</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
