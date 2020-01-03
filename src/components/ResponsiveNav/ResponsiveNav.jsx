import React from "react";
import { Link } from "@reach/router";

function ResponsiveNav({ navLinks }) {
  return (
    <nav>
      <ul>
        {navLinks.map(link => (
          <li>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ResponsiveNav;
