import React from "react";
import Icon from "../utils/icon";

const CircleWidget = (props) => {
  return (
      <div className={'circle-widget'}>
        <div className={'circle-icon'}>
          <Icon src={props.src} className={'rounded'} width={3.125} height={2.8125}/>
        </div>
        <div className={'text'}>{props.text}</div>
      </div>
  )
};

export default CircleWidget;
