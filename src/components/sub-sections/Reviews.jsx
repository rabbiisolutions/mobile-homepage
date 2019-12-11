import clientReviews from "../../constants/reviews";
import Review from "../sub-items/Review";
import Accordion from "../utils/Accordion";


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
              ))
          )
  )
};

export default Reviews;
