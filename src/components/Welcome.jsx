import Benefits from "./Benefits";
import React from "react";
import texts from "../constants/texts";

const Welcome = () => {
  return (
      <section id={'welcome'}>
        <div className={'bulletin'}>
          <h4>{texts.welcome}</h4>
          <div className={'sell'}>{texts.welcomeSell[0]}</div>
          <div className={'sell'}>{texts.welcomeSell[1]}</div>
          <div id={'emphasis'}>{texts.welcomeSell[2]}</div>
        </div>
        {Benefits()}
      </section>
  )
};

export default Welcome;
