import React from "react";
import texts from "../../constants/texts";
import teeChaAreasCollapse from "../sub-sections/TeeChaAreasCollapse";

const TeeCha = () => {
  return (
      <section id={'teecha'}>
        <div id="teecha-areas">
          <div id="home-tuition-areas-title">our services</div>
          <div id="home-tuition-areas">
            {teeChaAreasCollapse()}
          </div>
          <div id="home-tuition-info">{texts.homeTuitionInfo}</div>
        </div>
      </section>
  );
};

export default TeeCha;
