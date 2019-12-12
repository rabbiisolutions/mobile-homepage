import Accordion from "../utils/Accordion";
import texts from "../../constants/texts";
import teeChaAreasLists from "../../constants/TeeChaAreasLists";
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
        {Accordion.toggle('1. ' + texts.academic)}
        {
          Accordion.panel(teeChaAreasLists.academics, 'areas-bg')
        }
      </div>
      ,
      <div className={name} key={12}>
        {Accordion.toggle('2. ' + texts.skills)}
        {
          Accordion.panel(skills_areas, 'areas-bg', 'skills')
        }
      </div>
  );

  return ( // return the academic areas list
      collapses.map((panel) => (panel))
  );
};

export default teeChaAreasCollapse;
