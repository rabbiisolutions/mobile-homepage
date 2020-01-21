import React from "react";
import ButtonLink from "../basic/ButtonLink";
import signUpHandler from "../../events/signUpModal";

const SignUpModal = (props) => {
  return (
      <div className={props.className}>
        <div className={"close-icon"} onClick={e => signUpHandler(e)}>&#10006;</div>
        <div className="sign-up-text">{props.signUpText}</div>
        <section>
          <div className="user-title">
            Sign up as a Client/Parent to get a tutor/Teacher
          </div>
          <div id="client-btns">
            <ButtonLink link="https://forms.gle/y7KTkMDtYCtAywDu6" className="client-btn" value="Get a Tutor"/>
          </div>
        </section>
        <section>
          <div className="user-title">
            Register to be a Tutor/Teacher in your specific category
          </div>
          <div id="tutor-btns">
            <ButtonLink link="https://forms.gle/LerPUYib9EJ3yMxr7" className="tutor-btn" value="Non TSC Tutor"/>
            <ButtonLink link="https://forms.gle/ZU8GZrYVPWenL4r19" className="tutor-btn" value="TSC Tutor"/>
            <ButtonLink link="https://forms.gle/CmgUyZCWrnLgsqnC9" className="tutor-btn" value="Skills Tutor"/>
          </div>
        </section>
        <div className="msg">If you face difficulty in registering call, text or WhatsApp on 0772 915 361</div>
      </div>
  );
};

// Exporting the component
export default SignUpModal;