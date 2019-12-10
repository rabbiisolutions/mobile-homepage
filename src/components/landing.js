import React from "react";
import Icon from "./utils/icon";
import bulb from "../icons/idea.svg"
import texts from "../constants/texts";
import webpIsSupported from "../helpers/webp";
import teeChaAreasCollapse from "./teeChaAreasCollapse";
import SignUpModal from "./utils/signUpModal";
import ButtonLink from "./utils/ButtonLink";

const MobileLanding = () => {
  return (
      <div className={webpIsSupported() ? "landing landing-webp": "landing landing-jpeg"}>
        <div className="teecha-caption" id="teecha">
          <div className="teecha">{texts.teeCha}</div>
          <div className="home-tuition">{texts.homeTuition}</div>
        </div>
        <div className="teecha-areas">
          <div className="home-tuition-areas-title">{texts.homeTuitionAreas}</div>
          <div className="home-tuition-areas">
            {teeChaAreasCollapse()}
          </div>
          <div id={'catalogue'}>
            <ButtonLink link="https://catalogue.rabbii.co.ke/" className="clients-btn" value="Learn more about Our Services"/>
          </div>
          <div className="home-tuition-info">{texts.homeTuitionInfo}</div>
        </div>
        <div id={'tuition-jobs'}>
          <ButtonLink link="https://tuition-jobs.rabbii.co.ke/" className="clients-btn" value="View Available Tuition Jobs"/>
        </div>
        <SignUpModal className="sign-up div" signUpText="Sign Up to Receive Our Price List" status="hidden"/>
        <div className="slogan">
          <Icon src={bulb} className="idea" height={1.625}/>
          <span className="text">{texts.slogan}&nbsp;</span>
        </div>
      </div>
  );
};

export default MobileLanding;
