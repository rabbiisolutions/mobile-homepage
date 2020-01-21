import React from "react";
import renderStars from "../basic/stars";

const Review = (props) => {
  return (
      <div className="review" key={props.key}>
        <div className="reviewer">
          <span>{props.name}</span>,&nbsp;<span>{props.description}</span>
        </div>
        <div className="stars">{renderStars({shade: props.stars.shade, height: 4, key: props.stars.key})}</div>
        <div className="comment">{props.comment}</div>
      </div>
  );
};

// Exporting the component
export default Review;
