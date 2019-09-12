import React from "react";


const Step = (props) =>  {
  return (
      <div className="step" key={props.stepNumber}>
        <div className="step-number">Step {props.stepNumber}</div>
        <div className="step-title">&middot; {props.title}</div>
        <div className="step-description">{props.description}</div>
      </div>
  );
};

export default Step;
