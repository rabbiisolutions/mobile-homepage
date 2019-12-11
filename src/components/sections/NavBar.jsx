import React from "react";
import Logo from "../utils/logo";
import Icon from "../utils/icon";
import toggle from "../../icons/bx_bx-menu-alt-leftmenu.svg"
import Button from "../utils/button";
import texts from "../../constants/texts";
import signUpHandler from "../../events/signUpModal";
import menuToggle from "../../events/menuToggle";


const MobileNavBar = () => {
  return (
    <nav id="nav-bar">
      <Logo className="logo" height={2.5}/>
      <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
      <Icon src={toggle} className="toggle" height={2.25} width={2.25} onClick={e => menuToggle(e)}/>
    </nav>
  );
};

export default MobileNavBar;
