import React from "react";
import "./work.css";
import workOne from "../../images/work1.webp";
import workTwo from "../../images/work2.webp";
import WorkInfo from "./WorkInfo";
const Work = () => {
  return (
    <div className="work">
      <div className="container">
        <div className="info">
          <h3>How we work</h3>
          <p>Don't be busy - be productive</p>
        </div>
        <div className="container workImages">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <WorkInfo number="01" heading="Research" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <WorkInfo number="02" heading="Desgin" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img src={workOne} alt="Image Work One" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img src={workTwo} alt="Image Work Two" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <WorkInfo number="03" heading="Implementation" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <WorkInfo number="04" heading="Results" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row informationTwo">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h4>If the plan doesn't work - change the plan,<br /> not the goal</h4>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis facilis corporis doloremque tenetur quae, incidunt
                veniam esse reprehenderit veritatis hic eaque reiciendis vel
                libero? Quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
