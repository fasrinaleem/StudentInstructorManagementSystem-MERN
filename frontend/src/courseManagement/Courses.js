import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CourseAdd from "./CourseAdd";
import CourseUpdate from "./CourseUpdate";
import CourseList from "./CourseList";
import CourseDelete from "./CourseDelete";
import CourseManage from "./ManageCourse";

// import logo from "./resources/logo.png";

class Courses extends Component {
  render() {
    return (
      <Router>
        <div className="container" style={{ backgroundColor: "#336699" }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="http://courseweb.sliit.lk/"
              target="_blank"
            >
              {/* <img src={logo} width="50" height="50" alt="courseweb.sliit.lk" /> */}
            </a>

            <Link to="/courselist" className="navbar-brand">
              Course Management
            </Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/courselist" className="nav-link">
                    Courses
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/addcourse" className="nav-link">
                    Add Courses
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/managecourse" className="nav-link">
                    Manage Courses
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/courselist" exact component={CourseList} />
          <Route path="/update/:id" component={CourseUpdate} />
          <Route path="/addcourse" component={CourseAdd} />
          <Route path="/delete/:id" component={CourseDelete} />
          <Route path="/managecourse" component={CourseManage} />
        </div>
      </Router>
    );
  }
}

export default Courses;
