import React from "react";
import SectionsAccordion from "./sectionsAccordion";
import ImageWebp from "../helpers/ImageWebp";
import landingJ from "../images/jpeg/landing.jpg";
import landingW from "../images/webp/landing.webp";

const Sections = () => {
  return (
      <div className="sections">
        <ImageWebp
            src={landingJ}
            srcWebp={landingW}
            width={200}
            height={200}
        />
        <div id="sections-title">Sections</div>
        <div id="sections-lead">Tap a section to expand or collapse it</div>
        {SectionsAccordion()}
      </div>
  );
};

export default Sections;
