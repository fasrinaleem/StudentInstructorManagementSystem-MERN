import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CourseAdd from "./CourseAdd";
import CourseUpdate from "./CourseUpdate";
import CourseList from "./CourseList";
import CourseDelete from "./CourseDelete";
import CourseManage from "./ManageCourse";
import CourseView from "./ViewCourse";
import CourseEntroll from "./CourseEntroll";
import LinkAssignment from "../studentManagement/LinkAssignment";

class Courses extends Component {
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

            <Link to="/courselist" className="navbar-brand">
              Course Management
            </Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/viewcourse" className="nav-link">
                    View Courses
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/addcourse" className="nav-link">
                    Add Course
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/managecourse" className="nav-link">
                    Manage Course
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/viewcourse" exact component={CourseView} />
          <Route path="/update/:id" component={CourseUpdate} />
          <Route path="/addcourse" component={CourseAdd} />
          <Route path="/delete/:id" component={CourseDelete} />
          <Route path="/managecourse" component={CourseManage} />
          <Route path="/courselist" component={CourseList} />
          <Route path="/courseentroll" component={CourseEntroll} />
          <Route path="/assignmentlink" component={LinkAssignment} />
        </div>
      </Router>
    );
  }
}

export default Courses;
