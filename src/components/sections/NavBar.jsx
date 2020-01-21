import React from "react";
import Logo from "../basic/Logo";
import Icon from "../basic/icon";
import toggle from "../../icons/bx_bx-menu-alt-leftmenu.svg"
import Button from "../basic/button";
import texts from "../../constants/texts";
import signUpHandler from "../../events/signUpModal";
import menuToggle from "../../events/menuToggle";


const MobileNavBar = () => {
  return (
    <nav id="nav-bar">
      <Logo className="logo" height={3.5} width={5.625} units={'em'}/>
      <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
      <Icon src={toggle} className="toggle" height={2.25} width={2.25} units={'em'} onClick={e => menuToggle(e)}/>
    </nav>
  );
};

export default MobileNavBar;
