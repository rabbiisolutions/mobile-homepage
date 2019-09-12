import overlayAction from "./overlayActions";

const menuToggle = evt => {
  evt.preventDefault();
  const sideBar = document.getElementsByClassName('menu')[0];
  overlayAction(sideBar);
};

export default menuToggle;
