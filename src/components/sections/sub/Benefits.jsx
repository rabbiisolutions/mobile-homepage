import React from "react";
import Collapse from "../../composite/Collapse";
import texts from "../../../constants/texts";
import benefits from "../../../constants/benefits";

const name = 'benefits-accordion';

const Benefits = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={'a'}>
        {Collapse.toggle(texts.benefits[0])}
        {
          Collapse.panel(benefits.sameGender)
        }
      </div>
      ,
      <div className={name} key={'b'}>
        {Collapse.toggle(texts.benefits[1])}
        {
          Collapse.panel(benefits.plus500)
        }
      </div>
      ,
      <div className={name} key={'c'}>
        {Collapse.toggle(texts.benefits[2])}
        {
          Collapse.panel(benefits.academicCounselling)
        }
      </div>
      ,
      <div className={name} key={'d'}>
        {Collapse.toggle(texts.benefits[3])}
        {
          Collapse.panel(benefits.affordable)
        }
      </div>
      ,
      <div className={name} key={'e'}>
        {Collapse.toggle(texts.benefits[4])}
        {
          Collapse.panel(benefits.studentRatio)
        }
      </div>
      ,
      <div className={name} key={'f'}>
        {Collapse.toggle(texts.benefits[5])}
        {
          Collapse.panel(benefits.peerToPeer)
        }
      </div>
  );

  return ( // return the sections list
      collapses.map((panel) => (panel))
  );
};

export default Benefits;
