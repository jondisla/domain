import React, { Component } from "react";
import logo from "./img/jondislalogo.png";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
