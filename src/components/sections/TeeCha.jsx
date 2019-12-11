import React from "react";
import texts from "../../constants/texts";
import teeChaAreasCollapse from "./TeeChaAreasCollapse";
import ButtonLink from "../utils/ButtonLink";

const TeeCha = () => {
  return (
      <section id={'teecha'}>
        <div id="title">{texts.teeCha}</div>
        <a id="caption" href={'https://catalogue.rabbii.co.ke/'}>{texts.homeTuition}</a>
        <div id="teecha-areas">
          <div id="home-tuition-areas-title">{texts.homeTuitionAreas}</div>
          <div id="home-tuition-areas">
            {teeChaAreasCollapse()}
          </div>
          <div id={'catalogue'}>
            <ButtonLink link="https://catalogue.rabbii.co.ke/" className="services" value="Learn more about Our Services"/>
          </div>
          <div id="home-tuition-info">{texts.homeTuitionInfo}</div>
        </div>
        <div id={'tuition-jobs'}>
          <ButtonLink link="https://tuition-jobs.rabbii.co.ke/" className="services" value="View available Tuition Jobs"/>
        </div>
      </section>
  );
};

export default TeeCha;
