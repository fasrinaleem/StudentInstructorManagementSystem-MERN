import React, { Component } from "react";
import MainHeader from "../header/MainHeader";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import "../Home.css";
import courseimg from "../img/coursesimage.png";
import studentimg from "../img/studentimage.jpg";
import instructorimg from "../img/instructorimage.jpg";
import adminimage from "../img/adminimage.jpg";
import studentdashboard from "../img/studentdashboard.png";

export default class MainSignIn extends Component {
  render() {
    return (
      <div>
        <section id="boxes">
          <div class="container">
            <div class="box">
              <img src={studentdashboard} width="500" />
              <h3>
                {" "}
                <Link to="/studentsignin"> Student </Link>
              </h3>
            </div>
            <div class="box">
              <img src={instructorimg} width="500" />
              <h3>
                {" "}
                <Link to="/instructorsignin"> Instructor </Link>
              </h3>
            </div>

            <div class="box">
              <img src={adminimage} width="500" />
              <h3>
                {" "}
                <Link to="/adminsignin"> Admin </Link>
              </h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
