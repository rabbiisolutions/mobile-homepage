import React from "react";
import texts from "../constants/texts";
import Accordion from "./basic/Accordion";
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
      <div className={name} key={'c4'}>
        {Accordion.toggle(texts.reviews)}
        {
          Reviews()
        }
      </div>
      ,
      <div className={name} key={'c2'}>
        {<a href={'https://payment.rabbii.co.ke'} className={'link'}>Payment</a>}
      </div>
      ,
      <div className={name} key={'c3'}>
        {<a href={'https://tuition-jobs.rabbii.co.ke'} className={'link'}>Become a Tutor</a>}
      </div>
  );

  return ( // return the academic areas list
      collapses.map((panel) => (panel))
  );
};

const Sections = () => {
  return (
      <section id="sections">
        <div id="sections-lead">tap a section to expand or collapse it</div>
        {SectionsAccordion()}
      </section>
  );
};

export default Sections;
