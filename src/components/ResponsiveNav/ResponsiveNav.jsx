import React from "react";
import { Link } from "@reach/router";

import './style/ResponsiveNav.scss';
import logo from '../../pages/img/logo3.png'

function ResponsiveNav({ navLinks }) {
  return (
    <nav>
      <ul>
        <li className="logo"><img src={logo} alt=""/></li>
        <div className="navItems">
        {navLinks.map(link => (
          
          <li>
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
