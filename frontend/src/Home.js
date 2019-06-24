import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Home.css";

import courseimg from "./img/coursesimage.png";
import studentimg from "./img/studentimage.jpg";
import instructorimg from "./img/instructorimage.jpg";
import adminimage from "./img/adminimage.jpg";
import coursesbanner from "./img/courses-banner.jpg";

import MainSignIn from "./signIn/MainSignIn";
import Calendar from "./Calender";

class Home extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    this.props.history.push("/mainsignin");
  }
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

              <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter Email..." />
                <input type="password" placeholder="Enter Password..." />
                <button type="submit" class="button_1">
                  Login
                </button>
              </form>
            </div>
          </section>
          <div>
            <div style={{ float: "right" }}>
              <Calendar />
            </div>
            <div>
              <img src={coursesbanner} width="900" />
            </div>
          </div>
          <section id="boxes">
            <div class="container">
              {/* <div class="box">

                <h3>
                  {" "}
                  <Link to="/studentsignin"> Student </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies
                </p>
              </div>
              <div class="box">
                <img src={instructorimg} width="500" />
                <h3>
                  {" "}
                  <Link to="/instructorcoursesignin"> Instructor </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies
                </p>
              </div>
              <div class="box">
                <img src={adminimage} width="500" />
                <h3>
                  {" "}
                  <Link to="/adminsignin"> Admin </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies
                </p>
              </div> */}
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default Home;
