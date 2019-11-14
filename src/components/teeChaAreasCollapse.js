import mobileAccordion from "./utils/accordion";
import texts from "../constants/texts";
import teeChaAreasLists from "../constants/teeChaAreasLists";
import React from "react";

const name = 'teecha-collapse';

const skills_areas = (
    <div>
      <div className="sub-category">Foreign Languages</div>
      {teeChaAreasLists.fl}
      <div className="sub-category">Games & Sports</div>
      {teeChaAreasLists.gs}
    </div>
);

const teeChaAreasCollapse = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={11}>
        {mobileAccordion.toggle(texts.dot + texts.academic)}
        {
          mobileAccordion.panel(teeChaAreasLists.academics)
        }
      </div>
      ,
      <div className={name} key={12}>
        {mobileAccordion.toggle(texts.dot + texts.skills)}
        {
          mobileAccordion.panel(skills_areas)
        }
      </div>
  );

  return ( // return the academic areas list
      collapses.map((panel) => (panel))
  );
};

export default teeChaAreasCollapse;
