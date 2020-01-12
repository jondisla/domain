import React, { Component } from "react";
import $ from "jquery";
//pics
import Fancy from "./img/fancyrespic.png";
import Saul from "./img/saulsite.jpg";
import Planit from "./img/planit.png";
import Woc from "./img/woc.jpg";
import Wop from "./img/wop.jpg";
import Parkfinder from "./img/parkfinder.jpg";

//porpages
import Fancyres from "./pages/Fancyres";

import "./portfolio.scss";
import "./portfolio.js";

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

const showProject = [
  {
    text: "Fancy Res",
    path: "/fancyres",
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

class Portfolio extends Component {
  //JQUERY LOGIC
  componentDidMount() {
    $(".all").click(() => {
      $(".all").addClass("portNavBtnActive");
      $(".design, .app, .wp").fadeIn();
      $(".des, .apps, .wordpress").removeClass("portNavBtnActive");
    });
    $(".des").click(() => {
      $(".des").addClass("portNavBtnActive");
      $(".design").fadeIn();
      $(".app, .wp").fadeOut();
      $(".apps, .wordpress, .all").removeClass("portNavBtnActive");
    });
    $(".apps").click(() => {
      $(".apps").addClass("portNavBtnActive");
      $(".app").fadeIn();
      $(".design, .wp").hide();
      $(".des, .wordpress, .all").removeClass("portNavBtnActive");
    });
    $(".wordpress").click(() => {
      $(".wordpress").addClass("portNavBtnActive");
      $(".wp").fadeIn();
      $(".app, .design").fadeOut("blind");
      $(".des, .apps, .all").removeClass("portNavBtnActive");
    });

    //HOVERS
    $("#fancy").click(() => {
      $(".showFancy").fadeIn();
      $(".design, .app, .wp, .titleSec").fadeOut();
      $(".portfolio").css({ height: "30px" });
      $(".portNav").css({ padding: "0" });
    });
  }

  //RENDERING
  render() {
    const design = projects.map(items => {
      return (
        <div className={items.class} id={items.id}>
          {/* <a href={items.href}> */}
          <div className="portfolioTitles">{items.name}</div>
          <img src={items.img} className="portfolioPics" />
          <div className="desc">{items.desc}</div>
          {/* </a> */}
        </div>
      );
    });

    //RETURNING
    return (
      <div className="page pagesContainer">
        <div className="portfolio">
          <div className="titleSec">
            <h2>Portfolio</h2>
            <div className="subtxt">Check out some of my work</div>
          </div>
          <div className="portNav">
            <ul>
              <li className="all portNavBtnActive">All</li>
              <li className="des">Design</li>
              <li className="apps">Application</li>
              <li className="wordpress">Wordpress</li>
            </ul>
          </div>
        </div>
        <div className="portBlocks">{design}</div>
        <Fancyres />
      </div>
    );
  }
}
export default Portfolio;
