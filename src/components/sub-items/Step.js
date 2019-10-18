import React from "react";

const Step = (props) =>  {
  let description = null;
  if (typeof props.description == "string") {
    description = <div className="step-description">{props.description}</div>;
  } else if (typeof props.description == "object") {
    description = <div className="step-description">
                    <span>{props.description}</span>
                  </div>;
  }
  return (
      <div className="step" key={props.stepNumber}>
        <div className="step-number">Step {props.stepNumber}</div>
        <div className="step-title">&middot; {props.title}</div>
        {description}
      </div>
  );
};

export default Step;
