import React from "react";
import { Link } from "@reach/router";

import "./style/ResponsiveNav.scss";
import logo from "../../pages/img/logo3.png";

function ResponsiveNav({ navLinks }) {
  // const pathId = window.location.pathname;
  // const pathStr = pathId.replace(/\\|\//g, "");

  // const homeId = document.querySelectorAll(".home");
  // const homeA = homeId.getElementsByTagName("a");
  // console.log(homeId);

  // if (pathStr == homeId) {
  //   homeId.style.textDecoration = "underline red !important";
  // }
  return (
    <nav>
      <ul>
        <li className="logo">
          <img src={logo} alt="" />
        </li>
        <div className="navItems">
          {navLinks.map(link => (
            <li id={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </div>
      </ul>
      <ul className="social">
        <li>Youtube</li>
      </ul>
    </nav>
  );
}

export default ResponsiveNav;
