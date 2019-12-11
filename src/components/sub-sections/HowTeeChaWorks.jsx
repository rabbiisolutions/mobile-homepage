import CircleWidget from "../sub-items/CircleWidget.jsx";
import signup from "../../icons/teecha/application.svg"
import proInfo from "../../icons/teecha/resume.svg"
import studInfo from "../../icons/teecha/resume (1).svg"
import screen from "../../icons/teecha/time.svg"
import gets from "../../icons/teecha/deal.svg"
import verification from "../../icons/teecha/verified-account.svg"
import placement from "../../icons/teecha/recruitment.svg"
import start from "../../icons/teecha/start-line.svg"
import evaluation from "../../icons/teecha/evaluation.svg"
import counselling from "../../icons/teecha/mentor.svg"
import right from "../../icons/teecha/fa-solid_long-arrow-alt-downright-small.svg"
import left from "../../icons/teecha/fa-solid_long-arrow-alt-downleft-small.svg"
import dotted from "../../icons/teecha/Arrow 13dotted-small.svg"
import Icon from "../utils/icon";
import DownArrow from "../utils/DownArrow";
import React from "react";

const HowTeeChaWorks = () => {
  return (
      <section className={'how-teecha-works'}>
        <section className={'tutor-col col'}>
          <div className={'user-title tutor-title'}>Tutor</div>
          <CircleWidget src={signup} text={'Tutor Sign Up'}/>
          <DownArrow/>
          <CircleWidget src={proInfo} text={'Give Professional Info'}/>
          <DownArrow/>
          <CircleWidget src={screen} text={'Screen Tutor'}/>
          <DownArrow/>
          <CircleWidget src={verification} text={'Tutor Verification'}/>
          <DownArrow/>
          <CircleWidget src={placement} text={'Tutor Placement'}/>
          <DownArrow/>
          <CircleWidget src={evaluation} text={'Tutor Evaluation & Management'}/>
        </section>
        <section className={'mid-col col'}>
          <Icon src={left} width={4.25} height={1} className={'left-arrow'}/>
          <Icon src={right} width={4.25} height={1} className={'right-arrow'}/>
        </section>
        <section className={'client-col col'}>
          <div className={'user-title client-title'}>Client</div>
          <CircleWidget src={signup} text={'Client Sign Up'}/>
          <DownArrow/>
          <CircleWidget src={studInfo} text={'Give Student Client Info'}/>
          <DownArrow/>
          <CircleWidget src={gets} text={'Gets Tutor'}/>
          <Icon src={dotted} width={1.25} height={12.5} className={'dotted-arrow'}/>
          <CircleWidget src={start} text={'Session Begins'}/>
          <DownArrow/>
          <CircleWidget src={counselling} text={'Mentoring & Counselling'}/>
        </section>
      </section>
  );
};

export default HowTeeChaWorks;
