import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class Header extends Component {

  render() {
    return (
      <Router>
      <header id="home">




      <nav id="nav-wrap">




        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li><a href="https://sanatnayar.github.io/" >Back to Website</a></li>
	         <li><a className="smoothscroll" href="#resume">Info</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">My Portfolio</h1>

         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
   </Router>
    );
  }
}

export default Header;
