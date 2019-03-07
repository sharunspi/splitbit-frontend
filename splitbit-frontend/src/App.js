import React, { Component } from 'react';

import './App.css';
var name ="sharun";
class App extends Component {
  render() 
 
  {
    return (
      <div className="App">
       <button className="btn btn-primary">{name}</button>
      </div>
    );
  }
}

export default App;
