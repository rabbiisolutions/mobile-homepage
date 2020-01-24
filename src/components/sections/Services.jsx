import React from "react";
import texts from "../../constants/texts";
import teeChaAreasCollapse from "./sub/TeeChaAreasCollapse";

const Services = () => {
  return (
      <section id={'teecha'}>
        <div id="teecha-areas">
          <div id="services-title">our services</div>
          <div id="home-tuition-areas">
            {teeChaAreasCollapse()}
          </div>
          <div id="home-tuition-info">{texts.homeTuitionInfo}</div>
        </div>
      </section>
  );
};

export default Services;
