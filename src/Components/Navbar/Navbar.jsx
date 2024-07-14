import React from "react";
import logo from "../../images/logo.png"
import "./navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top z-3">
        <div className="container">
          <Link className="navbar-brand"to="/">
            <img src={logo} alt="Logo"/>
          </Link>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <button className="contact">
                  <Link to="/contact">Contact</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
