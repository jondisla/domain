import React, { Component } from "react";
import Projects from "./Projects";

import "./portfolio.scss";

const projects = [
  {
    design: [
      {
        name: "tesrt",
        img: "Home"
      },
      {
        name: "test2",
        img: "img"
      }
    ]
  }
];
console.log(projects[0].design[0]);
function projectsSec({})
class Portfolio extends Component {
  render() {
    return (
      <div className="page portfolio">
        <h2>Portfolio</h2>
        <div className="subtxt">Check out some of my work</div>
        <div className="portNav">
          <ul>
            <li>Design</li>
            <li>Application</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className="portBlocks">
          <Projects projects={projects}/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
