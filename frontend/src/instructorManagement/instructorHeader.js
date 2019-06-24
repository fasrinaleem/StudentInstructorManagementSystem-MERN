import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import addInstructor from "./addInstructor";
import InstructorUpdate from "./InstructorUpdate";
import InstructorList from "./InstructorList";
import DeleteInstructor from "./DeleteInstructor";
// import CourseDelete from "./CourseDelete";
// import CourseManage from "./ManageCourse";

// import logo from "./resources/logo.png";

class instructorHeader extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="http://courseweb.sliit.lk/"
              target="_blank"
            >
              {/* <img src={logo} width="50" height="50" alt="courseweb.sliit.lk" /> */}
            </a>

            <Link to="/instructorList" className="navbar-brand">
              Instructor Management
            </Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/instructorList" className="nav-link">
                    Instructors
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/addinstructor" className="nav-link">
                    Add Instructor
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={InstructorList} />
          <Route path="/instructorList" exact component={InstructorList} />
          <Route path="/update/:id" component={InstructorUpdate} />
          <Route path="/addinstructor" component={addInstructor} />
          <Route path="/delete/:id" component={DeleteInstructor} />
          {/*<Route path="/managecourse" component={CourseManage} />*/}
        </div>
      </Router>
    );
  }
}

export default instructorHeader;
