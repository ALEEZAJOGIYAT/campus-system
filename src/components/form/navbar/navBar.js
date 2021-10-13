import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import Modal from "../../company/modal";

const navItemsStudent = [
  { name: "Companies", route: "/companies" },
  { name: "All Jobs", route: "/alljobs" },
  { name: "Applied Jobs", route: "/appliedjobs" },
  { name: "Profile", route: "/profile" },
];

const navItemsCompany = [
  { name: "Vacancies", route: "/company" },
  { name: "Profile", route: "/companyprofile" },
];

const NavBar = () => {
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
            {navItemsStudent.map((item) => (
              <Link to={item.route}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    {item.name}
                  </a>
                </li>
              </Link>
            ))}
            {/* {!(
              window.location.pathname === "/company" ||
              window.location.pathname === "/profile"
            ) && 
            } */}

            {navItemsCompany.map((items) => (
              <Link to={items.route}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    {items.name}
                  </a>
                </li>
              </Link>
            ))}
          </ul>
          <Modal />

          <Link to="/login">
            <button className="btn btn-outline-success" type="submit">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
