import React from "react";
import "./banner.css";
const Banner = (props) => {
  return (
    <div className="headerAbout">
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default Banner;

