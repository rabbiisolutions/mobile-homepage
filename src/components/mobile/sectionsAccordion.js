import React from "react";
import texts from "../constants/texts";
import mobileAccordion from "../utils/accordion";
import HowTeeChaWorks from "./sections/howTeeChaWorks";
import HowToGetATutor from "./sections/howToGet";
import HowToBeATutor from "./sections/howToBe";
import Reviews from "./reviews";
import FeaturedTutors from "./sections/FeaturedTutors";
import Trending from "./sections/trending";


const name = 'sections-accordion';

const SectionsAccordion = () => {
    const collapses = [];
    collapses.push(
        <div className={name} key={11}>
          {mobileAccordion.toggle(texts.howTeeChaWorks)}
          {
            HowTeeChaWorks()
          }
        </div>
        ,
        <div className={name} key={12}>
          {mobileAccordion.toggle(texts.howTo + texts.getATutor)}
          {
            HowToGetATutor()
          }
        </div>
        ,
        <div className={name} key={13}>
          {mobileAccordion.toggle(texts.howTo + texts.beATutor)}
          {
            HowToBeATutor()
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
        ,
        <div className={name} key={16} id="trending">
          {mobileAccordion.toggle(texts.trending)}
          {
            Trending()
          }
        </div>
    );

    return ( // return the academic areas list
        collapses.map((panel) => (panel))
    );
  };

export default SectionsAccordion;
