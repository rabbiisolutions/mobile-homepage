import React from "react";
import Logo from "./basic/Logo";
import Icon from "./basic/Icon";
import toggle from "../assets/icons/bx_bx-menu-alt-leftmenu.svg"
import Button from "./basic/Button";
import texts from "../constants/texts";
import signUpHandler from "../events/signUpModal";
import menuToggle from "../events/menuToggle";
import {useCookies} from "react-cookie";

function Toggle() {
  // fetch cookies object, set toggled variable (class)
  const [cookies, setCookie] = useCookies(['toggled']);
  let toggled = cookies['toggled'] ? '' : 'pulse';

  function toggleHandler () {
    menuToggle();
    // set toggled true if not already true
    if (!cookies['toggled']) setCookie('toggled', true, { path: '/' });
  }

  return (
      <Icon src={toggle} className={"toggle " + toggled} height={2.25} width={2.25} units={'em'} onClick={e => toggleHandler(e)}/>
  )
}


const MobileNavBar = () => {
  return (
    <nav id="nav-bar">
      <Logo className="logo" height={3.5} width={5.625} units={'em'}/>
      <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
      <div className={'left'}>
        <Toggle/>
      </div>
    </nav>
  );
};

export default MobileNavBar;
