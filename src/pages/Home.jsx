import React, { Component } from "react";
import "./mainStyles.scss";

class Home extends Component {
  render() {
    return (
      <div className="page home overlay">
        <div className="homeContent">
          <h1>John Disla</h1>
          <div className="subTxt">Web Developer from Orlando Florida</div>
        </div>
      </div>
    );
  }
}

export default Home;
