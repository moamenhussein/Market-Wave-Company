import React from "react";
import "./story.css";
import storyImage from "../../images/story.avif";
import StoryInfo from "./StoryInfo";
import Work from "../work/Work";
import Business from "../business/Business";
const Story = () => {
  return (
    <div className="story">
      <div className="info">
        <h3>Our Story</h3>
        <p>More than 30+ years of experience</p>
      </div>
      <div className="container">
        <div className="row storyInformation">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={storyImage} alt="Story Image" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 headerAndParagraph">
            <h3>
              The way to get started is to quit <br /> talking and begin doing!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dolorem ut incidunt unde? Perferendis asperiores sit fugiat
              tenetur quibusdam accusantium quo dicta odit necessitatibus
              corporis vitae sequi delectus facere ea, cum incidunt laudantium
              reiciendis excepturi error laborum voluptatibus officia quis eos
              veritatis? Cum saepe, sit quae odit quibusdam consectetur qui.
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center storyInfo">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <StoryInfo
              number="30"
              title="Years in Business"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <StoryInfo number="95%" title="Customer satisfaction" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <StoryInfo number="40+" title="Specialists in our team" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <StoryInfo number="150+" title="Successful cases" />
          </div>
        </div>
      </div>
      <Work />
      <Business />
    </div>
  );
};

export default Story;
