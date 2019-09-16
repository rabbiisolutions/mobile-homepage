import mobileAccordion from "../utils/accordion";
import Step from "./Step";

const HowTo = (steps, bgClass, filter) => {
  let domSteps = [];
  steps.forEach((step) => {
    domSteps.push(
        Step(step)
    );
  });

  return (
      mobileAccordion.panel(
          domSteps.map((step) => (
              step
          )),
          bgClass, filter
      )
  );
};

export default HowTo;
