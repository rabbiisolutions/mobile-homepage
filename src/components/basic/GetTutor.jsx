import React from "react";
import ButtonLink from "./ButtonLink.jsx";

const GetTutor = (props) => {
  return (
      <div className={'get-a-tutor'}>
        <ButtonLink link={props.link} className="services" value="Get a Tutor"/>
      </div>
  )
};

export default GetTutor;
