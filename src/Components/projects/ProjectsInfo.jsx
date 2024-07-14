import React from "react";

const ProjectsInfo = (props) => {
  return (
    <div className="projectsInfo">
      <img src={props.image} />
      <div className="inforamtics">
        <h4>{props.heading}</h4>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
};

export default ProjectsInfo;
