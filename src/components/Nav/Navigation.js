import React, { Component } from "react";
import logo from "./img/jondislalogo.png";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["About", "Projects", "Contact"];
    const navLinks = sections.map(section => {
      return (
        <li>
          <a href={"#" + section}>{section}</a>
        </li>
      );
    });
    return (
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>{navLinks}</ul>
      </nav>
    );
  }
}

export default Navigation;
