import React from "react";
import SectionsAccordion from "./sectionsAccordion";


const Sections = () => {
  return (
      <div className="sections">
        <div id="sections-title">Sections</div>
        <div id="sections-lead">Tap a section to expand or collapse it</div>
        {SectionsAccordion()}
      </div>
  );
};

export default Sections;
