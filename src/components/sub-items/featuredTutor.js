import React from "react";
import renderStars from "../utils/stars";


const FeaturedTutor = (props) => {
  return (
      <div className="featured" key={props.key}>
        <div className="featured-tutor">{props.name}</div>
        <div className="tutor-description">({props.description})</div>
        <div className="stars">{renderStars({shade: props.stars.shade, height: 1, key: props.key})}</div>
        <div className="comment">{props.comment}</div>
        <div><span className="areas">{props.areas}</span></div>
      </div>
  );
};

// Exporting the component
export default FeaturedTutor;
