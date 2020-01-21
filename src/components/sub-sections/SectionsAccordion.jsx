import React from "react";
import texts from "../../constants/texts";
import Accordion from "../utils/Accordion";
import HowTeeChaWorks from "./HowTeeChaWorks";
import Reviews from "./Reviews";


const name = 'sections-accordion';

const SectionsAccordion = () => {
    const collapses = [];
    collapses.push(
        <div className={name} key={'c1'}>
          {Accordion.toggle(texts.howTeeChaWorks)}
          {
            Accordion.panel(HowTeeChaWorks(), 'canvas')
          }
        </div>
        ,
        <div className={name} key={'c2'}>
          {Accordion.toggle(texts.reviews)}
          {
            Reviews()
          }
        </div>
    );

    return ( // return the academic areas list
        collapses.map((panel) => (panel))
    );
  };

export default SectionsAccordion;
