import React from "react";
import "./projects.css";
import imageOne from "../../images/project1.webp";
import imageTwo from "../../images/project2.webp";
import imageThree from "../../images/project3.webp";
import imageFour from "../../images/project4.webp";
import ProjectsInfo from "./ProjectsInfo";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="info">
          <h2>Completed Projects</h2>
          <p>Our portfolio speaks better than words!</p>
        </div>
        <div className="container text-center">
          <div className="row projectsInfo">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ProjectsInfo image={imageOne} heading="Code Lap" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ProjectsInfo
                image={imageTwo}
                heading="Atica Agency"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ProjectsInfo image={imageThree} heading="Utosia"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ProjectsInfo image={imageFour} heading="Kyan"/>
            </div>
          </div>
          <Link to={"/about"}>Discover more projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
