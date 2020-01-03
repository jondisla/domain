import React, { Component } from "react";

import "../Header/styles/style.css";

// const youTube = ()=>{
//     return()
// }

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerWrapper">
          <div className="test">
            <h1 className="title">{this.props.title}</h1>
            <div className="subtext">{this.props.subtext}</div>
          </div>
          <h2 className="featTitle">{this.props.featTitle}</h2>
          {/* <div className="featVid">VIDEO</div> */}
          <div className="featSubTxt">Visit for more</div>
        </div>
      </div>
    );
  }
}

export default Header;
