import React from "react";
import mobileAccordion from "../composite/Accordion";
import texts from "../../constants/texts";
import benefits from "../../constants/benefits";

const name = 'benefits-accordion';

const Benefits = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={'a'}>
        {mobileAccordion.toggle(texts.benefits[0])}
        {
          mobileAccordion.panel(benefits.sameGender)
        }
      </div>
      ,
      <div className={name} key={'b'}>
        {mobileAccordion.toggle(texts.benefits[1])}
        {
          mobileAccordion.panel(benefits.plus500)
        }
      </div>
      ,
      <div className={name} key={'c'}>
        {mobileAccordion.toggle(texts.benefits[2])}
        {
          mobileAccordion.panel(benefits.academicCounselling)
        }
      </div>
      ,
      <div className={name} key={'d'}>
        {mobileAccordion.toggle(texts.benefits[3])}
        {
          mobileAccordion.panel(benefits.affordable)
        }
      </div>
      ,
      <div className={name} key={'e'}>
        {mobileAccordion.toggle(texts.benefits[4])}
        {
          mobileAccordion.panel(benefits.studentRatio)
        }
      </div>
      ,
      <div className={name} key={'f'}>
        {mobileAccordion.toggle(texts.benefits[5])}
        {
          mobileAccordion.panel(benefits.peerToPeer)
        }
      </div>
  );

  return ( // return the sections list
      collapses.map((panel) => (panel))
  );
};

export default Benefits;
