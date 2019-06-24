import React, { Component } from "react";
import { Link } from "react-router-dom";
import courseimg from "../img/coursesimage.png";
import studentimg from "../img/studentimage.jpg";
import instructorimg from "../img/instructorimage.jpg";

export default class InstructorCourseSignIn extends Component {
  render() {
    return (
      <div>
        <section id="boxes">
          <div class="container">
            <div class="box">
              <img src={courseimg} width="500" />
              <h3>
                {" "}
                <Link to="/courses"> Courses </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mi augue, viverra sit amet ultricies
              </p>
            </div>
            <div class="box">
              <img src={instructorimg} width="500" />
              <h3>
                {" "}
                <Link to="/instructorsignin"> Instructor </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mi augue, viverra sit amet ultricies
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
