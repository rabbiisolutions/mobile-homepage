import React, {Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import MobileNavBar from "./components/navBar";
import MobileLanding from "./components/landing";
import Sections from "./components/sections";
import MobileFooter from "./components/footer";
import SignUpModal from "./components/utils/signUpModal";
import SideBar from "./components/sideBar";
import backDropHandler from "./events/backDrop";
import texts from "./constants/texts";


class App extends Component {
  render() {
    return (
        <Router>
          {MobileHome()}
          <SignUpModal className="sign-up modal hidden" signUpText={texts.signUp}/>
        </Router>
    );
  }
}

function MobileHome() {
  return (
      <div>
        <MobileNavBar/>
        <MobileLanding/>
        <Sections/>
        <MobileFooter/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <SideBar/>
      </div>
  );
}

export default App;
