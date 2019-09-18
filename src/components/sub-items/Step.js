import React from "react";
import moreHandler from "../../events/moreHandler";

const Step = (props) =>  {
  let description = null;
  if (typeof props.description == "string") {
    description = <div className="step-description">{props.description}</div>;
  } else if (typeof props.description == "object") {
    description = <div className="step-description">
                    <span>{props.description[0]}</span>
                    <span className="more hidden">{props.description[1]}</span>
                    <span className="dots" onClick={e => moreHandler(e)}>&nbsp;more...</span>
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
