import texts from "../../constants/texts";
import mobileAccordion from "../utils/accordion";
import ButtonLink from "../utils/ButtonLink";
import React from "react";
import Icon from "../utils/icon";
import facebook from "../../icons/social/facebook-f-brands.svg";
import twitter from "../../icons/social/twitter-brands.svg";
import BackGround from "../utils/backGround";


const Trending = () => {
  const info = (
      <div className="trending">
        <div className="did-you-know">{texts.didYouKnow}</div>
        <div className="advert">{texts.weekly}</div>
        <div className="check-out">{texts.checkOut}</div>
        <div className="social-links">
          <ButtonLink link="https://www.facebook.com/pg/rabbiitech/posts/" className="trends facebook" value="facebook"
                      icon={<Icon src={facebook} className="trend-icon" height={1.5}/>}/>
          <ButtonLink link="https://twitter.com/RabbiiTech/media" className="trends twitter" value="twitter"
                      icon={<Icon src={twitter} className="trend-icon" height={1.5}/>}/>
        </div>
        <div>
          <iframe height="200" src="https://www.youtube.com/embed/h0eIfbQSMnI?loop=1&amp;playlist=aHA_UjXVQT"
                  frameBorder="0" className="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen width="300"/>
        </div>
      </div>
  );
  return (
        mobileAccordion.panel(info, 'trending-' + BackGround())
  );
};

export default Trending;
