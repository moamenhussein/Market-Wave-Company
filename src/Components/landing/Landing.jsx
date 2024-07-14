import React from "react";
import rocket from "../../images/rocket.svg";
import "./Landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="info">
          <div className="container">
            <div className="row info">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h3>Market Wave</h3>
                <p>Our expertise is your growth!</p>
                <div className="buttons">
                  <Link to="/contact" className="touch">
                    Get in touch
                  </Link>
                  <Link to="/about" className="aboutComp">
                    About our company
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img src={rocket} alt="Landing Page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
