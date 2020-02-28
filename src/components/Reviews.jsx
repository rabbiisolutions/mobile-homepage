import React from 'react';
import ImageWebp from "../helpers/ImageWebp";
import clientReviews from "../constants/reviews";
import Accordion from "./basic/Accordion";
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import Icon from "./basic/Icon";
import star from "../assets/icons/star-solid.svg";

const Reviews = () => {
  const Star = (props) => {
    return <Icon src={star} className={"star " + props.shade } height={props.height} units={'vw'} key={props.key}/>;
  };

  function renderStars(stars) {
    let num = parseInt(stars.key);
    return (
        stars.shade.map((shade) => {
          num = num + 1;
          return Star({shade: shade, key: num, height: stars.height});
        })
    );
  }

  const Review = (props) => {
    return (
        <div className="review" key={props.key}>
          <div className="reviewer">
            <span>{props.name}</span>
          </div>
          <div className="comment">
            <div className={'quotation'}>"</div>
            <div className={'text'}>{props.comment}</div>
          </div>
          <div className="desc">
            <span>{props.description}</span>
          </div>
          <div className="stars">{renderStars({shade: props.stars.shade, height: 4, key: props.stars.key})}</div>
        </div>
    );
  };

  const CarouselUI = ({ position, total, handleClick, children }) => (
      <section id={'reviews-cont'}>
        <div id={'dots'}>
          {Array(...Array(total)).map( (val, index) =>
              <span className={'dot'} key={index} onClick={handleClick} data-position={index}>
                {index === position ? '● ' : '○ ' }
              </span>
          )}
        </div>
        <div id={'children'}>
          {children}
        </div>
      </section>
  );
  const Carousel = makeCarousel(CarouselUI);

  const Slider = (props) => {
    return(
        <Slide right key={props.key}>
          <div>
            <div className={'image-container'}>
              <ImageWebp src={props.images.jpeg} srcWebp={props.images.webp} className={'review-image'}/>
            </div>
            {Review(props.review)}
          </div>
        </Slide>
    )
  };


  return Accordion.panel(
      <Carousel>
        {clientReviews.map((clientReview) => (
            Slider(clientReview)
        ))}
      </Carousel>
  );
};

export default Reviews;
