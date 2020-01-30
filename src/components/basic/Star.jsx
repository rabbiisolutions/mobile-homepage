import React from "react";
import Icon from "./Icon";
import star from "../../assets/icons/star-solid.svg"


const Star = (props) => {
  return <Icon src={star} className={"star " + props.shade } height={props.height} units={'vw'} key={props.key}/>;
};

export default Star;
