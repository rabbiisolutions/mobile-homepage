import FeaturedTutor from "../sub-items/FeaturedTutor";
import Accordion from "../utils/Accordion";
import featuredTutors from "../../constants/featuredTutors";


const FeaturedTutors = () => {
  const featured = [];
  featured.push(
      FeaturedTutor(featuredTutors[0]),
      FeaturedTutor(featuredTutors[1]),
  );
  return (
          Accordion.panel(
              featured.map((tutor) => (
                  tutor
              )),
              'featured-bg'
          )
  )
};

export default FeaturedTutors;
