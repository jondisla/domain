import React, { Component } from "react";
import $ from "jquery";

// import Portfolio from "../Portfolio";
//pics
import Fancy from "../img/fancyrespic.png";
import Saul from "../img/saulsite.jpg";
import Planit from "../img/planit.png";
import Woc from "../img/woc.jpg";
import Wop from "../img/wop.jpg";
import Parkfinder from "../img/parkfinder.jpg";
//techpics
import Basicstack from "../img/tech/basicstack.png";
import Bootstrap from "../img/tech/bootstrap.png";
import Express from "../img/tech/express.png";
import Firebase from "../img/tech/firebase.png";
import Html1 from "../img/tech/html1.jpg";
import Mysql from "../img/tech/icon-mysql.png";
import Node from "../img/tech/nodejs.png";
import Php from "../img/tech/php.png";
import Wordpress from "../img/tech/wordpress.png";

import "../portfolio.scss";

const projects = [
  {
    name: "Fancy Restaurant",
    img: Fancy,
    desc: "Simple restaurant template",
    id: "fancy",
    class: "itemContainer design",
    href: "./pages/fancyres"
  },
  {
    name: "Planit",
    img: Planit,
    desc: "Lesson plans for teachers",
    id: "planit",
    class: "itemContainer app",
    href: "http://planlesson.herokuapp.com/index.php"
  },
  {
    name: "Photography",
    img: Saul,
    desc: "Portfolio site for videographer",
    id: "photo",
    class: "itemContainer wp",
    href: "http://sauldisla.com"
  },
  {
    name: "W. Orlando Church",
    img: Woc,
    desc: "Christian church home site",
    id: "woc",
    class: "itemContainer wp",
    href: "https://westorlandochurch.tv"
  },
  {
    name: "Cork Board",
    img: Wop,
    desc: "Organize your bookmarks",
    id: "cork",
    class: "itemContainer app",
    href: "http://crkboard.herokuapp.com/"
  },
  {
    name: "Park Finder",
    img: Parkfinder,
    desc: "Get information about Florida national parks",
    id: "park",
    class: "itemContainer design",
    href: "http://jondisla.github.io/parkfinder"
  }
];

class Fancyres extends Component {
  //JQUERY LOGIC
  // componentDidMount() {}

  //RENDERING
  render() {
    //RETURNING
    return (
      <div className="singleProject">
        <div className="showFancy">
          <img src={Fancy} className="projectPic" />
        </div>
        <div className="technology">
          <ul>
            <li>
              <img src={Basicstack} />
            </li>
            <li>
              <img src={Bootstrap} />
            </li>
            <li>
              <img src={Bootstrap} />
            </li>
            <li>
              <img src={Php} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Fancyres;
