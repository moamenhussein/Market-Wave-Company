import React from "react";

const TeamInfo = (props) => {
  return (
    <>
      <img src={props.image} />
      <div className="teamInfo">
        <h4>{props.name}</h4>
        <h6>{props.job}</h6>
        <button>Details</button>
      </div>
    </>
  );
};

export default TeamInfo;
