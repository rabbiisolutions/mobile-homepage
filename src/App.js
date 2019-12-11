import React, {Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
// sections
import MobileNavBar from "./components/sections/NavBar";
import LandingImage from "./components/sections/LandingImage";
import TeeCha from "./components/sections/TeeCha";
import Sections from "./components/sections/Sections";
import Footer from "./components/sections/Footer";
// utilities
import SignUpModal from "./components/utils/SignUpModal";
import backDropHandler from "./events/backDrop";
// text constants
import texts from "./constants/texts";


class App extends Component {
  render() {
    return (
        <Router>
          <MobileNavBar/>
          <main>
            <LandingImage/>
            <TeeCha/>
            <Sections/>
          </main>
          <Footer/>
          <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
          <SignUpModal className="sign-up-modal hidden" signUpText={texts.signUpModalTitle}/>
        </Router>
    );
  }
}

export default App;
