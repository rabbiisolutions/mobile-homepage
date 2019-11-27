import React from "react";
import texts from "../constants/texts";
import mobileAccordion from "./utils/accordion";
import HowTeeChaWorks from "./sections/howTeeChaWorks";
import Reviews from "./reviews";
import FeaturedTutors from "./sections/FeaturedTutors";


const name = 'sections-accordion';

const SectionsAccordion = () => {
    const collapses = [];
    collapses.push(
        <div className={name} key={11}>
          {mobileAccordion.toggle(texts.howTeeChaWorks)}
          {
            mobileAccordion.panel(HowTeeChaWorks())
          }
        </div>
        ,
        <div className={name} key={14}>
          {mobileAccordion.toggle(texts.reviews)}
          {
            Reviews()
          }
        </div>
        ,
        <div className={name} key={15}>
          {mobileAccordion.toggle(texts.featuredTutors)}
          {
            FeaturedTutors()
          }
        </div>
    );

    return ( // return the academic areas list
        collapses.map((panel) => (panel))
    );
  };

export default SectionsAccordion;
