import React from "react";
import Icon from "./utils/icon";
import bulb from "../icons/idea.svg"
import texts from "../constants/texts";
import webpIsSupported from "../helpers/webp";
import teeChaAreasCollapse from "./teeChaAreasCollapse";

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
          <div className="home-tuition-info">{texts.homeTuitionInfo}</div>
        </div>
        <div className="slogan">
          <Icon src={bulb} className="idea" height={1.625}/>
          <span className="text">{texts.slogan}&nbsp;</span>
        </div>
      </div>
  );
};

export default MobileLanding;
