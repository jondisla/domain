//import React and ReactDOM libraries
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Navigation from "./components/Nav/Navigation";
import Header from "./components/Header/Header";
import Practice from "./components/Practice/Practice";
import Practice from "./components/Practice/Practice";

//LINKS
const navLinks = [
  {
    text: "Contact",
    path: "/contact"
  }
];
//Create a react component
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header
          title="John Disla"
          subtext="Front-end developer from Florida"
          featTitle="Featured"
        />
        <Nav2 />
      </div>
    );
  }
}

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
