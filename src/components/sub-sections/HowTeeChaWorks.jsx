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
import plane1 from "../../icons/teecha/Line 18plane.svg"
import plane2 from "../../icons/teecha/Groupplane.svg"
import plane3 from "../../icons/teecha/Line 17plane.svg"
import pen1 from "../../icons/teecha/Arrow 36pen.svg"
import pen2 from "../../icons/teecha/Vectorpen.svg"
import pen3 from "../../icons/teecha/Line 19pen.svg"
import dotted from "../../icons/teecha/Arrow 13dotted-small.svg"
import tutorStart from "../../icons/teecha/Arrow 32tutor-start.svg"
import clientStart from "../../icons/teecha/Arrow 31client-start.svg"
import Icon from "../utils/icon";
import DownArrow from "../utils/DownArrow.jsx";
import FLowLine from "../utils/FlowLine";
import React from "react";

const HowTeeChaWorks = () => {
  return (
      <section className={'how-teecha-works'}>
        <div className={'titles'}>
          <div className={'user-title'}>tutor</div>
          <div className={'user-title'}>client</div>
        </div>
        <div className={'start-arrow'}>
          <Icon src={tutorStart} width={16} height={5} units={'vw'}/>
          <Icon src={clientStart} width={16} height={5} units={'vw'}/>
        </div>
        <div className={'columns'}>
          <section className={'tutor-col col'}>
            <CircleWidget src={signup} text={'Tutor Sign Up'}/>
            <FLowLine/>
            <CircleWidget src={proInfo} text={'Give Professional Info'}/>
            <FLowLine/>
            <CircleWidget src={screen} text={'Screen Tutor'}/>
            <FLowLine/>
            <CircleWidget src={verification} text={'Tutor Verification'}/>
            <FLowLine/>
            <CircleWidget src={placement} text={'Tutor Placement'}/>
            <DownArrow/>
            <CircleWidget src={evaluation} text={'Tutor Evaluation & Management'}/>
          </section>
          <section className={'mid-col col'}>
            <div id={'plane'}>
              <Icon src={plane1} width={8} height={5} units={'vw'} className={'start'}/>
              <Icon src={plane2} width={16} height={5} units={'vw'} className={'mid'}/>
              <Icon src={plane3} width={8} height={5} units={'vw'} className={'end'}/>
            </div>
            <div id={'pen'}>
              <Icon src={pen1} width={8} height={5} units={'vw'} className={'start'}/>
              <Icon src={pen2} width={16} height={5} units={'vw'} className={'mid'}/>
              <Icon src={pen3} width={8} height={5} units={'vw'} className={'end'}/>
            </div>
          </section>
          <section className={'client-col col'}>
            <CircleWidget src={signup} text={'Client Sign Up'}/>
            <FLowLine/>
            <CircleWidget src={studInfo} text={'Give Student Client Info'}/>
            <DownArrow/>
            <CircleWidget src={gets} text={'Gets Tutor'}/>
            <Icon src={dotted} width={5} height={49} units={'vw'} className={'dotted-arrow'}/>
            <CircleWidget src={start} text={'Session Begins'}/>
            <DownArrow/>
            <CircleWidget src={counselling} text={'Mentoring & Counselling'}/>
          </section>
        </div>
      </section>
  );
};

export default HowTeeChaWorks;
