import React from "react";
import renderStars from "../utils/stars";

const mapComment = (commentObj) => {
  return (
      commentObj.map(comment => (
          <div>{comment}</div>
          )
      )
  )
};


const FeaturedTutor = (props) => {
  return (
      <div className="featured" key={props.key}>
        <div className="featured-tutor">{props.name}</div>
        <div className="tutor-description">({props.description})</div>
        <div className="stars">{renderStars({shade: props.stars.shade, height: 4, key: props.stars.key})}</div>
        <div className="comment">
          {
            typeof props.comment === "object" ?
                mapComment(props.comment) :
                props.comment
          }
          {}
        </div>
        <div><span className="areas">{props.areas}</span></div>
      </div>
  );
};

// Exporting the component
export default FeaturedTutor;
