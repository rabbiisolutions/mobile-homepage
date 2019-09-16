import React, {Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import MobileNavBar from "./components/mobile/navBar";
import MobileLanding from "./components/mobile/landing";
import Sections from "./components/mobile/sections";
import MobileFooter from "./components/mobile/footer";
import SignUpModal from "./components/utils/signUpModal";
import SideBar from "./components/mobile/sideBar";
import backDropHandler from "./events/backDrop";


class App extends Component {
  render() {
    return (
        <Router>
          {MobileHome()}
          <SignUpModal/>
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
