import React from "react";
import "./experience.css";
import person from "../../images/person1.webp"
import ExperienceInfo from "./ExperienceInfo";
import { Link } from "react-router-dom";
const Experience = () => {
  return (
    <div className="experiences">
      <div className="container">
        <div className="info">
          <h3>Trust our experience!</h3>
          <p>We will help your business</p>
        </div>
        <div className="container">
          <div className="row containerInfo">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ExperienceInfo heading="Complex Solutions"/>
              <ExperienceInfo heading="Leading Experts"/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ExperienceInfo heading="High quality standards"/>
              <ExperienceInfo heading="Flexible prices"/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 imageInformation">
              <img src={person} alt="Person"/>
              <div className="infoContent">
                <h5 className="font-bold">Tarek Mohamed</h5>
                <h5 className="job">Founder & CEO</h5>
                <Link to="/tarekDetils">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
