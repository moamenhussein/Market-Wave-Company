import React from "react";
import servicesOne from "../../images/services1.svg";
import servicesTwo from "../../images/services2.svg";
import ServicesThree from "../../images/services3.svg";
import "./services.css";
import ServicesInfo from "./ServicesInfo";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="info">
          <h2>Services</h2>
          <p>We love & know what we do!</p>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ServicesInfo image={servicesOne} heading="Brand Identity" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ServicesInfo
                image={servicesTwo}
                heading="Social media marketing"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ServicesInfo image={ServicesThree} heading="Project Management"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
