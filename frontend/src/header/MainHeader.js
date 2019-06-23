import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../Home.css";

import logo from "../img/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="container">
            <div id="branding">
              <h1>
                <img src={logo} width="220" />
                {/* <span class="highlight">BRIGHT</span> NERD */}
              </h1>
            </div>
            <nav>
              <ul>
                <li class="current">
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/signup"> Sign Up </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/mainsignin"> Sign In </Link>{" "}
                </li>{" "}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
