import FeaturedTutor from "../utils/featuredTutor";
import mobileAccordion from "../../utils/accordion";
import featuredTutors from "../../constants/featuredTutors";


const FeaturedTutors = () => {
  const featured = [];
  featured.push(
      FeaturedTutor(featuredTutors[0]),
      FeaturedTutor(featuredTutors[1]),
  );
  return (
          mobileAccordion.panel(
              featured.map((tutor) => (
                  tutor
              )),
              'featured-bg'
          )
  )
};

export default FeaturedTutors;
