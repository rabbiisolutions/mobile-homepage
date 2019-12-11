import React from "react";
import logo from "../../icons/logo.svg";
import Icon from './icon'

const Logo = (props) => {
  return (
      <a href={'#'}>
        <Icon src={logo} className={props.className} height={props.height}/>
      </a>
  );
};

// Exporting the component
export default Logo;
