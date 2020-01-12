//import React and ReactDOM libraries
import React, { Component } from "react";
import { Router } from "@reach/router";
import $ from "jquery";

import ResponsiveNav from "./components/ResponsiveNav/ResponsiveNav";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Fancyres from "./pages/Portfolio/pages/Fancyres";

import ReactDOM from "react-dom";
import "./index.css";
import "./pages/mainStyles.scss";

// import Navigation from "./components/Nav/Navigation";
// import Header from "./components/Header/Header";
// import Practice from "./components/Practice/Practice";

//LINKS
const navLinks = [
  {
    text: "Home",
    path: "/",
    id: "home"
  },
  {
    text: "Portfolio",
    path: "/portfolio",
    id: "portfolio"
  },
  {
    text: "About",
    path: "/about",
    id: "about"
  },
  {
    text: "Contact",
    path: "/contact",
    id: "contact"
  }
];
//Create a react component
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <Navigation />
        <Header
          title="John Disla"
          subtext="Front-end developer from Florida"
          featTitle="Featured"
        /> */}
        <ResponsiveNav navLinks={navLinks} />
        <Router>
          <Home strict path="/" />
          <Portfolio strict path="/portfolio" />
          <About strict path="/about" />
          <Contact strict path="/contact" />
        </Router>
      </div>
    );
  }
}

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
