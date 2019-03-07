import React, { Component } from 'react';
import logo from './logo.png';
import './main.css';

class Head extends Component {
  render() 
 
  {
    return (
      <div>
       <nav className="navbar navbar-expand-lg  static-top na-cp">
       <img className="logos" src= {logo} />
      <div className="container">
     
          
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link he" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link he" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default Head;
