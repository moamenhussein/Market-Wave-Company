import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
import sadImage from "../../images/error.gif";
const Error = () => {
  return (
    <div className="error">
      <div className="info">
        <h2>Page Not Found</h2>
        <Link to={"/"}>
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </Link>
      </div>
      <div className="error-page">
        <div className="sad">
          <span>4</span>
          <img src={sadImage} alt="Error" />
          <span>4</span>
        </div>
        <h3>The Page you were looking for, <br /> couldn't be found.</h3>
        <p>
          The page you are looking for might have been removed, had its name <br />
          changed, or is temporarily unavailable.
        </p>
        <div className="buttons">
          <Link to={"/"}>Back</Link>
          <Link to={"/"}>Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
