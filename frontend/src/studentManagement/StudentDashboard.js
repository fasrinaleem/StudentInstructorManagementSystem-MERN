import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AssignmentUpload from "./AssignmentUpload";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AssignmentLink from "./LinkAssignment";
import CourseList from "../courseManagement/CourseList";
import ViewCourse from "../courseManagement/ViewCourse";

class StudentDashboard extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <div style={{ marginTop: 20 }}>
              <center>
                <div className="card mb-3" style={{ width: "700px" }}>
                  <div style={{ width: "700px" }}>
                    <div className="card-header">
                      <b>
                        <h3> Student Dashbord </h3>
                      </b>{" "}
                    </div>{" "}
                    <div className="çard-body" />{" "}
                  </div>{" "}
                </div>{" "}
              </center>{" "}
            </div>
          </div>
          <div>
            <Link to={"/assignmentlink"}> View Assignments </Link>{" "}
            <Link to={"/courselist"}> View Courses </Link>{" "}
          </div>

          <Route path="/assignmentupload" component={AssignmentUpload} />
          <Route path="/assignmentlink" component={AssignmentLink} />
          <Route path="/courselist" component={CourseList} />
          <Route path="/viewcourse" component={ViewCourse} />
        </Router>
      </div>
    );
  }
}

export default StudentDashboard;
