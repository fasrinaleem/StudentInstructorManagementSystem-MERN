import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Home.css";

import courseimg from "./img/coursesimage.png";
import studentimg from "./img/studentimage.jpg";
import instructorimg from "./img/instructorimage.jpg";
import adminimage from "./img/adminimage.jpg";

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <section id="showcase">
            <div class="container">
              <h1>Welcome to Student-Instructor Application</h1>
            </div>
          </section>

          <section id="newsletter">
            <div class="container">
              <h1>Login to Brightnerd</h1>

              <form>
                <input type="email" placeholder="Enter Email..." />
                <input type="password" placeholder="Enter Password..." />
                <button type="submit" class="button_1">
                  Login
                </button>
              </form>
            </div>
          </section>

          <section id="boxes">
            <div class="container">
              <div class="box">
                <img src={courseimg} width="500" />
                <h3>
                  {" "}
                  <Link to="/courses"> Courses </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies
                </p>
              </div>
              <div class="box">
                <img src={studentimg} width="500" />
                <h3>
                  {" "}
                  <Link to="/studentlist"> Student </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies
                </p>
              </div>
              <div class="box">
                <img src={instructorimg} width="500" />
                <h3>Instructor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies
                </p>
              </div>
              <div class="box">
                <img src={adminimage} width="500" />
                <h3>Admin</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies
                </p>
              </div>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default Home;
