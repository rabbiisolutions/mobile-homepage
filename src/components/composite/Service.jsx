import React from "react";
import Icon from "../basic/Icon";
import GetTutor from "./GetTutor";

const Desc = (list) => {
  return list.map((item) => (<p>{item}</p>));
};

const Service = (props) => {
  return (
      <div>
        {Desc(props.desc)}
        <div className={'display'}>
          {props.examples}
          <Icon src={props.icon} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={props.link}/>
      </div>
  );
};

export default Service;
