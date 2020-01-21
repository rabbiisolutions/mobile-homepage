import Accordion from "../utils/Accordion";
import texts from "../../constants/texts";
import React from "react";
import KCSE from "./services/KCSE";
import Inter from "./services/International";
import Sports from "./services/Sports";
import Language from "./services/Language";
import Hobbies from "./services/Hobbies";
import SpecialNeeds from "./services/SpecialNeeds";

const name = 'teecha-collapse';

const teeChaAreasCollapse = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={11}>
        {Accordion.toggle('1. ' + texts.services[0])}
        {
          Accordion.panel(<KCSE/>, 'areas-bg')
        }
      </div>
      ,
      <div className={name} key={12}>
        {Accordion.toggle('2. ' + texts.services[1])}
        {
          Accordion.panel(<Inter/>, 'areas-bg', 'skills')
        }
      </div>
      ,
      <div className={name} key={12}>
        {Accordion.toggle('3. ' + texts.services[2])}
        {
          Accordion.panel(<Sports/>, 'areas-bg', 'skills')
        }
      </div>
      ,
      <div className={name} key={12}>
        {Accordion.toggle('4. ' + texts.services[3])}
        {
          Accordion.panel(<Language/>, 'areas-bg', 'skills')
        }
      </div>
      ,
      <div className={name} key={12}>
        {Accordion.toggle('5. ' + texts.services[4])}
        {
          Accordion.panel(<Hobbies/>, 'areas-bg', 'skills')
        }
      </div>
      ,
      <div className={name} key={12}>
        {Accordion.toggle('6. ' + texts.services[5])}
        {
          Accordion.panel(<SpecialNeeds/>, 'areas-bg', 'skills')
        }
      </div>
  );

  return ( // return the academic areas list
      collapses.map((panel) => (panel))
  );
};

export default teeChaAreasCollapse;
