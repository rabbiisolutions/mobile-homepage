import React from "react";
import SectionsAccordion from "./SectionsAccordion";

const Sections = () => {
  return (
      <section id="sections">
        <div id="sections-title">Sections</div>
        <div id="sections-lead">tap a section to expand or collapse it</div>
        {SectionsAccordion()}
      </section>
  );
};

export default Sections;
