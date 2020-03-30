import React from "react";
import texts from "../constants/texts";
import Accordion from "./basic/Accordion";
import services from "../constants/services";
import Icon from "./basic/Icon";
import ButtonLink from "./basic/ButtonLink";
import { BrowserRouter as Router } from 'react-router-dom';

const GetTutor = (links) => {
  return (
      <div className={'get-a-tutor'}>
        {links.map((link) => (
            <ButtonLink link={link.link} key={link.key} className="services"
                        value={ link.value ? link.value : "Get a Tutor"}/>
        ))}
      </div>
  )
};

const Desc = (list) => {
  return list.map((item) => (<p key={item.key}>{item.value}</p>));
};

const Service = (props) => {
  return (
      <Router>
        {Desc(props.desc)}
        <div className={'display'}>
          {props.examples}
          <Icon src={props.icon} height={15} units={'vw'} width={15}/>
        </div>
        {GetTutor(props.links)}
      </Router>
  );
};

const ServicesCollapse = (props) => {
 return (
     <div className={'services-collapse'} key={props.key}>
       {Accordion.toggle(props.title)}
       {
         Accordion.panel(
             <Service desc={props.desc} examples={props.examples}
                      icon={props.icon} links={props.links}/>,
             'services-bg')
       }
     </div>
 )
};

const Services = () => {
  return (
      <section id={'our-services'}>
        <div id={'services'}>
          <div id="services-title">our services</div>
          <div id="services-list">
            {services.map(service => (
                ServicesCollapse(service)
            ))}
          </div>
          <div id="home-tuition-info">{texts.homeTuitionInfo}</div>
        </div>
      </section>
  );
};

export default Services;
