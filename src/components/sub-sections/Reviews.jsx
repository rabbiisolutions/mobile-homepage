import clientReviews from "../../constants/reviews";
import Review from "../composite/Review";
import Accordion from "../basic/Accordion";


const Reviews = () => {
  const reviews = [];
  reviews.push(
      Review(clientReviews[0]),
      Review(clientReviews[1]),
      Review(clientReviews[2]),
      Review(clientReviews[3]),
  );
  return (
          Accordion.panel(
              reviews.map((review) => (
                  review
              )), 'reviews'
          )
  )
};

export default Reviews;
