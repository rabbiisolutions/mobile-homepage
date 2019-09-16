import clientReviews from "../constants/reviews";
import Review from "./sub-items/review";
import mobileAccordion from "./utils/accordion";
import BackGround from "./utils/backGround";


const Reviews = () => {
  const reviews = [];
  reviews.push(
      Review(clientReviews[0]),
      Review(clientReviews[1]),
      Review(clientReviews[2]),
      Review(clientReviews[3]),
  );
  return (
          mobileAccordion.panel(
              reviews.map((review) => (
                  review
              )), 'reviews-' + BackGround(), 'reviews-filter'
          )
  )
};

export default Reviews;
