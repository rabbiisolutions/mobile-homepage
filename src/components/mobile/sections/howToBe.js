import howToBeATutorSteps from "../../constants/beATutor";
import HowTo from "../utils/howTo";
import BackGround from "../../utils/backGround";

const HowToBeATutor = () => {
  return (
      HowTo(howToBeATutorSteps, 'how-to-'  + BackGround(), 'how-to-filter')
  );
};

export default HowToBeATutor;
