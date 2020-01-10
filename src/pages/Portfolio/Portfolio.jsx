import React, { Component } from "react";
import $ from "jquery";
//pics
import Fancy from "./img/fancyrespic.png";
import Saul from "./img/saulsite.jpg";
import Planit from "./img/planit.png";
import Woc from "./img/woc.jpg";
import Wop from "./img/wop.jpg";
import Parkfinder from "./img/parkfinder.jpg";

import "./portfolio.scss";
import "./portfolio.js";

const projects = [
  {
    name: "Fancy Restaurant",
    img: Fancy,
    desc: "Simple restaurant template",
    id: "fancy",
    class: "itemContainer design",
    href: "http://johndisla.com/fancyres"
  },
  {
    name: "Planit",
    img: Planit,
    desc: "Lesson plans for teachers",
    id: "planit",
    class: "itemContainer application",
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
  }

  //RENDERING
  render() {
    const design = projects.map(items => {
      return (
        <div className={items.class} id={items.id}>
          <a href={items.href}>
            <div className="portfolioTitles">{items.name}</div>
            <img src={items.img} className="portfolioPics" />
            <div className="desc">{items.desc}</div>
          </a>
        </div>
      );
    });

    //RETURNING
    return (
      <div className="page pagesContainer">
        <div className="portfolio">
          <h2>Portfolio</h2>
          <div className="subtxt">Check out some of my work</div>
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
      </div>
    );
  }
}
export default Portfolio;
