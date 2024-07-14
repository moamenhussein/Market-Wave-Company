import React from "react";

const WorkInfo = (props) => {
  return (
    <div className="workInformation">
      <h3>{props.number}</h3>
      <h5>{props.heading}</h5>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta optio
        asperiores dolorem delectus quia perspiciatis?
      </p>
    </div>
  );
};

export default WorkInfo;
