import React, {Component} from "react";
import { CookiesProvider } from 'react-cookie';
// sections
import MobileNavBar from "./components/NavBar";
import LandingImage from "./components/Landing";
import Services from "./components/Services";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
// utilities
import SignUpModal from "./components/SignUpModal.jsx";
import backDropHandler from "./events/backDrop";
import SideBar from "./components/SideBar.jsx";
// text constants
import texts from "./constants/texts";
import Welcome from "./components/Welcome";


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
