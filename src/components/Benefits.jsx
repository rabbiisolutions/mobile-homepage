import React from "react";
import Collapse from "./basic/Collapse";
import benefits from "../constants/benefits";

const name = 'benefits-accordion';

const Benefits = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={'a'}>
        {Collapse.toggle(benefits.sameGender.title)}
        {
          Collapse.panel(benefits.sameGender.desc)
        }
      </div>
      ,
      <div className={name} key={'b'}>
        {Collapse.toggle(benefits.plus500.title)}
        {
          Collapse.panel(benefits.plus500.desc)
        }
      </div>
      ,
      <div className={name} key={'c'}>
        {Collapse.toggle(benefits.academicCounselling.title)}
        {
          Collapse.panel(benefits.academicCounselling.desc)
        }
      </div>
      ,
      <div className={name} key={'d'}>
        {Collapse.toggle(benefits.affordable.title)}
        {
          Collapse.panel(benefits.affordable.desc)
        }
      </div>
      ,
      <div className={name} key={'e'}>
        {Collapse.toggle(benefits.studentRatio.title)}
        {
          Collapse.panel(benefits.studentRatio.desc)
        }
      </div>
      ,
      <div className={name} key={'f'}>
        {Collapse.toggle(benefits.peerToPeer.title)}
        {
          Collapse.panel(benefits.peerToPeer.desc)
        }
      </div>
  );

  return ( // return the sections list
      collapses.map((panel) => (panel))
  );
};

export default Benefits;
