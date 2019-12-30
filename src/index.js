//import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Navigation from "./components/Nav/Navigation.js";

//Create a react component
const App = () => {
  return (
    <div className="card text-left">
      <Navigation />
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
