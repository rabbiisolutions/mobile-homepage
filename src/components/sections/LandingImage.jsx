import React from "react";
import Icon from "../utils/icon";
import bulb from "../../icons/idea.svg"
import texts from "../../constants/texts";
import landingJ from "../../images/landing.jpg";
import landingW from "../../images/landing.webp";
import ImageWebp from "../../helpers/ImageWebp";


const LandingImage = () => {
  return (
      <header id={'landing-image'}>
        <ImageWebp
            src={landingJ}
            srcWebp={landingW}
            className={'landing-image'}
        />
        <div id="slogan">
          <Icon src={bulb} className="idea" height={1.625}/>
          <span className="text">{texts.slogan}&nbsp;</span>
        </div>
      </header>
  );
};

export default LandingImage;
