import React from "react";
import sectionCollapseHandler from "../../events/collapse";
import Icon from "../basic/Icon";
import upIcon from "../../assets/icons/collapse/feather_chevron-up.svg";
import downIcon from "../../assets/icons/collapse/feather_chevron-down.svg";

const panel = (data) => {
  return (
      <div className="panel benefit-desc">
        {data}
      </div>
  )
};

const toggle = (title) => {
  return (
      <div className="benefits-toggle" onClick={e => sectionCollapseHandler(e)}>
        <span className="benefits-title">{title}</span>
        <Icon src={downIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={upIcon} height={1.2} width={1.2} className="up hidden"/>
      </div>);
};

const Collapse = {panel: panel, toggle: toggle};

export default Collapse;
