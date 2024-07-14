import React from "react";

const ServicesInfo = (props) => {
  return (
    <div>
      <img src={props.image} />
      <h4>{props.heading}</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
        officia consequuntur expedita dicta corrupti necessitatibus fugit atque
        quaerat voluptatibus a.
      </p>
      <a href="#services">Details & prices</a>
    </div>
  );
};

export default ServicesInfo;
