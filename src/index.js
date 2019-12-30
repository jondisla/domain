//import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
    return (
        <div className="card text-left">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p  style={{
                backgroundColor: 'blue',
                color: 'white'}}>Body tes</p>
          </div>
        </div>
        )
}

//Take the react component and show it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));