import React from "react";
import texts from "../../constants/texts";
import Accordion from "../composite/Accordion";
import Service from "../composite/Service";
import services from "../../constants/services";

const name = 'services-collapse';

const ServicesCollapse = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={'a11'}>
        {Accordion.toggle('1. ' + services.kcse.title)}
        {
          Accordion.panel(
              <Service desc={services.kcse.desc} examples={services.kcse.examples}
                       icon={services.kcse.icon} link={services.kcse.link}/>,
              'services-bg')
        }
      </div>
      ,
      <div className={name} key={'a12'}>
        {Accordion.toggle('2. ' + services.international.title)}
        {
          Accordion.panel(
              <Service desc={services.international.desc} examples={services.international.examples}
                       icon={services.international.icon} link={services.international.link}/>,
              'services-bg')
        }
      </div>
      ,
      <div className={name} key={'a13'}>
        {Accordion.toggle('3. ' + services.tests.title)}
        {
          Accordion.panel(
              <Service desc={services.tests.desc} examples={services.tests.examples}
                       icon={services.tests.icon} link={services.tests.link}/>,
              'services-bg')
        }
      </div>
      ,
      <div className={name} key={'a14'}>
        {Accordion.toggle('4. ' + services.sports.title)}
        {
          Accordion.panel(
              <Service desc={services.sports.desc} examples={services.sports.examples}
                       icon={services.sports.icon} link={services.sports.link}/>,
              'services-bg')
        }
      </div>
      ,
      <div className={name} key={'a15'}>
        {Accordion.toggle('5. ' + services.language.title)}
        {
          Accordion.panel(
              <Service desc={services.language.desc} examples={services.language.examples}
                       icon={services.language.icon} link={services.language.link}/>,
              'services-bg')
        }
      </div>
      ,
      <div className={name} key={'a16'}>
        {Accordion.toggle('6. ' + services.hobbies.title)}
        {
          Accordion.panel(
              <Service desc={services.hobbies.desc} examples={services.hobbies.examples}
                       icon={services.hobbies.icon} link={services.hobbies.link}/>,
              'services-bg')
        }
      </div>
      ,
      <div className={name} key={'a17'}>
        {Accordion.toggle('7. ' + services.specialNeeds.title)}
        {
          Accordion.panel(
              <Service desc={services.specialNeeds.desc} examples={services.specialNeeds.examples}
                       icon={services.specialNeeds.icon} link={services.specialNeeds.link}/>,
              'services-bg')
        }
      </div>
  );

  return ( // return the academic services list
      collapses.map((panel) => (panel))
  );
};

const Services = () => {
  return (
      <section id={'our-services'}>
        <div id={'services'}>
          <div id="services-title">our services</div>
          <div id="services-list">
            {ServicesCollapse()}
          </div>
          <div id="home-tuition-info">{texts.homeTuitionInfo}</div>
        </div>
      </section>
  );
};

export default Services;
