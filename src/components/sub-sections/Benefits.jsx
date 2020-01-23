import React from "react";
import mobileAccordion from "../composite/Accordion";
import texts from "../../constants/texts";
import benefits from "../../constants/benefits";

const name = 'sections-accordion';

const Mobile = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={'a'}>
        {mobileAccordion.toggle(texts.benefits[0])}
        {
          benefits.sameGender
        }
      </div>
      ,
      <div className={name} key={'b'}>
        {mobileAccordion.toggle(texts.benefits[1])}
        {
          benefits.plus500
        }
      </div>
      ,
      <div className={name} key={'c'}>
        {mobileAccordion.toggle(texts.benefits[2])}
        {
          benefits.academicCounselling
        }
      </div>
      ,
      <div className={name} key={'d'}>
        {mobileAccordion.toggle(texts.benefits[3])}
        {
          benefits.academicCounselling
        }
      </div>
      ,
      <div className={name} key={'e'}>
        {mobileAccordion.toggle(texts.benefits[4])}
        {
          benefits.affordable
        }
      </div>
      ,
      <div className={name} key={'f'}>
        {mobileAccordion.toggle(texts.benefits[5])}
        {
          benefits.peerToPeer
        }
      </div>
  );

  return ( // return the sections list
      collapses.map((panel) => (panel))
  );
};

export default Mobile;
