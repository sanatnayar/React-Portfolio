import React, { Component } from 'react';
class Home extends Component {

  render() {
    return(

      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sanat Nayar</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link href="css/main.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/animations.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <div className="container">
          <div id="sidebar">
            <div className="toggle-btn" onclick="document.getElementById('sidebar').classList.toggle('active');">
              <span />
              <span />
              <span />
            </div>
            <ul>
              <a href="index.html" className="animsition-link">
                <li>Home</li>
              </a>
              <a href="about.html" className="animsition-link">
                <li>About</li>
              </a>
              <a href="resume.html" className="animsition-link">
                <li>Resume</li>
              </a>
              <a href="http://localhost:3000/index.html#home" className="animsition-link">
                <li>My Portfolio</li>
              </a>
            </ul>
          </div>
          <div id="particles-js" />
          <div className="text" />
        </div>
        <div className="wrapper">
          <div id="object" className="slideRight">
            <img id="slide" src="img/canvas.png" />
          </div>
        </div>
      </div>
    );
  }
});
    )
