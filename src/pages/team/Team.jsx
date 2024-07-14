import React from "react";
import "./team.css";
import Banner from "../../Components/Banner/Banner";
import TeamInfo from "./TeamInfo";
import teamOne from "../../images/person1.webp";
import teamTwo from "../../images/person2.webp";
import teamThree from "../../images/person3.jpeg";
import Business from "../../Components/business/Business"
const Team = () => {
  return (
    <div>
      <Banner heading="Our Team" paragraph="Meet our specialists" />
      <div className="team">
        <div className="info">
          <h3>Meet our team</h3>
          <p>Our company in faces</p>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TeamInfo
                image={teamOne}
                name="Tarek Mohamed"
                job="Founder & CEO"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TeamInfo
                image={teamTwo}
                name="Mazen Osama"
                job="Accounting director"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TeamInfo
                image={teamThree}
                name="Maged Hamed"
                job="Marketing director"
              />
            </div>
          </div>
        </div>
        <div className="container infoTwo">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h4>
                You don't build a business, you build people, then people build
                the business
              </h4>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas veritatis magni deleniti delectus est! Dicta odit
                architecto nesciunt saepe quis, fugiat et accusamus sequi
                magnam.
              </p>
            </div>
          </div>
        </div>
        <Business />
      </div>
    </div>
  );
};

export default Team;
