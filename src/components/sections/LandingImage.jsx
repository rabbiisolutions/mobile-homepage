import React from "react";
import presidentJpeg from "../../images/carousel/1.png";
import presidentWebp from "../../images/carousel/1.webp";
import pilotJpeg from "../../images/carousel/2.png";
import pilotWebp from "../../images/carousel/2.webp";
import engineerJpeg from "../../images/carousel/3.png";
import engineerWebp from "../../images/carousel/3.webp";
import saxJpeg from "../../images/carousel/4.png";
import saxWebp from "../../images/carousel/4.webp";
import photographyJpeg from "../../images/carousel/5.png";
import photographyWebp from "../../images/carousel/5.webp";
import ImageWebp from "../../helpers/ImageWebp";
import { Zoom } from "react-slideshow-image";
import texts from "../../constants/texts";
import ButtonLink from "../basic/ButtonLink";

const images = [
  {jpeg: pilotJpeg, webp: pilotWebp},
  {jpeg: engineerJpeg, webp: engineerWebp},
  {jpeg: saxJpeg, webp: saxWebp},
  {jpeg: photographyJpeg, webp: photographyWebp},
  {jpeg: presidentJpeg, webp: presidentWebp},
];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: true
};


const Landing = () => {
  return (
      <section className="slide-container" id={'start'}>
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <ImageWebp key={index} style={{width: "100%"}} src={each.jpeg} srcWebp={each.webp} className={'slide-image'}/>)
          }
        </Zoom>
        <div id={'greeting'}>
          <h2>achieve your potential</h2>
          <p>Providing you with a personal tutor to help you turn your dreams into reality.</p>
          <div id={'dark-box'}>
            <p>Sign up <span>(client only*)</span> to see our price list.</p>
            <ButtonLink value={texts.signUp} link={"https://forms.gle/3JZCSM2JJTPLTjP57"} className="services"/>
          </div>
        </div>
      </section>
  )
};
export default Landing;
