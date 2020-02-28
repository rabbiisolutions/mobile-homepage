import React, {Component} from "react";
import { CookiesProvider } from 'react-cookie';
// sections
import MobileNavBar from "./components/sections/NavBar";
import LandingImage from "./components/sections/Landing";
import Services from "./components/sections/Services";
import Sections from "./components/sections/Sections";
import Footer from "./components/sections/Footer";
// utilities
import SignUpModal from "./components/SignUpModal.jsx";
import backDropHandler from "./events/backDrop";
import SideBar from "./components/sections/SideBar.jsx";
// text constants
import texts from "./constants/texts";
import Welcome from "./components/sections/Welcome";


class App extends Component {
  render() {
    return (
        <CookiesProvider>
          <MobileNavBar/>
          <main>
            <LandingImage/>
            <Welcome/>
            <Services/>
            <Sections/>
          </main>
          <Footer/>
          <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
          <SignUpModal className="sign-up-modal hidden" signUpText={texts.signUpModalTitle}/>
          <SideBar/>
        </CookiesProvider>
    );
  }
}

export default App;
