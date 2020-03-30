import React from "react";
import benefits from "../constants/benefits";
import sectionCollapseHandler from "../events/collapse";
import Icon from "./basic/Icon";
import downIcon from "../assets/icons/collapse/down.svg";
import upIcon from "../assets/icons/collapse/up.svg";

const Panel = (data) => {
  return (
      <div className="panel benefit-desc">
        {data}
      </div>
  )
};

const Toggle = (title) => {
  return (
      <div className="benefits-toggle" onClick={e => sectionCollapseHandler(e)}>
        <span className="benefits-title">{title}</span>
        <Icon src={downIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={upIcon} height={1.2} width={1.2} className="up hidden"/>
      </div>);
};

const Benefit = (props) => {
  return (
      <div className={'benefits-accordion'} key={props.key}>
        {Toggle(props.title)}
        {
          Panel(props.desc)
        }
      </div>
  )
};

const Benefits = () => {
  return ( // return the sections list
      benefits.map((benefit) => (Benefit(benefit)))
  );
};

export default Benefits;
