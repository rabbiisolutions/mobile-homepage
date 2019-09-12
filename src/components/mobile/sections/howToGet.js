import howToGetATutorSteps from "../../constants/getATutor";
import HowTo from "../utils/howTo";
import BackGround from "../../utils/backGround";

const HowToGetATutor = () => {
  return (
          HowTo(howToGetATutorSteps, 'how-to-' + BackGround(), 'how-to-filter')
  );
};

export default HowToGetATutor;
