import React from "react";
import sectionCollapseHandler from "../../events/collapse";
import Icon from "../basic/icon";
import rightIcon from "../../icons/feather_chevron-right.svg";
import downIcon from "../../icons/feather_chevron-down.svg";

const panel = (data) => {
  return (
      <div className="panel">
        {data}
      </div>
  )
};

const toggle = (title) => {
  return (
      <div className="section-toggle" onClick={e => sectionCollapseHandler(e)}>
        <Icon src={rightIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={downIcon} height={1.2} width={1.2} className="up hidden"/>
        <span className="section-title">{title}</span>
      </div>);
};

const mobileAccordion = {panel: panel, toggle: toggle};

export default mobileAccordion;
