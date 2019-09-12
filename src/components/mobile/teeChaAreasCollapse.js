import mobileAccordion from "../utils/accordion";
import texts from "../constants/texts";
import teeChaAreasLists from "../constants/teeChaAreasLists";
import React from "react";

const name = 'teecha-collapse';

const teeChaAreasCollapse = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={11}>
        {mobileAccordion.toggle(texts.dot + texts.academics)}
        {
          mobileAccordion.panel(teeChaAreasLists.academics)
        }
      </div>
      ,
      <div className={name} key={12}>
        {mobileAccordion.toggle(texts.dot + texts.thi)}
        {
          mobileAccordion.panel(teeChaAreasLists.thi)
        }
      </div>
      ,
      <div className={name} key={13}>
        {mobileAccordion.toggle(texts.dot + texts.technology)}
        {
          mobileAccordion.panel(teeChaAreasLists.technology)
        }
      </div>
      ,
      <div className={name} key={14}>
        {mobileAccordion.toggle(texts.dot + texts.languages)}
        {
          mobileAccordion.panel(teeChaAreasLists.languages)
        }
      </div>
      ,
      <div className={name} key={15}>
        {mobileAccordion.toggle(texts.dot + texts.counselling)}
        {
          mobileAccordion.panel(teeChaAreasLists.counselling)
        }
      </div>
      ,
      <div className={name} key={16}>
        {mobileAccordion.toggle(texts.dot + texts.sports)}
        {
          mobileAccordion.panel(teeChaAreasLists.sports)
        }
      </div>
      ,
      <div className={name} key={17}>
        {mobileAccordion.toggle(texts.dot + texts.university)}
        {
          mobileAccordion.panel(teeChaAreasLists.university)
        }
      </div>
  );

  return ( // return the academic areas list
      collapses.map((panel) => (panel))
  );
};

export default teeChaAreasCollapse;
