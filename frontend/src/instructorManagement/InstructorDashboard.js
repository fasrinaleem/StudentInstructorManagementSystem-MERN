import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./css.css";
import addAssignment from "./addAssignment";
import viewAssignment from "./viewAssignment";
import editAssignment from "./editAssignment";
import DeleteAssignment from "./DeleteAssignment";
import ViewCourse from "./ViewCourse";
import InstructorList from "./InstructorList";
import instructorHeader from "./instructorHeader";

// import exam from './AddExam';
// import view_ins from './ViewInstructor';
// import add_ins from './AddInstructor';
// import view_course from './ViewCourseIns';
// import view_exam from './ViewExamIns';

export default class InstructorDashboard extends Component {
  render() {
    return (
      <div>
        <h2 align="center">INSTRUCTOR</h2> <br />
        <Router>
          <ul className="nav nav-tabs">
            {/*<li className="nav-item">*/}
            {/*<Link to="/addIns" className="nav-link active">Add Instructor</Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*<Link to="/view_inst" className="nav-link active">View Instructor</Link>*/}
            {/*</li>*/}
            <li className="nav-item">
              <Link to="/viewCourse" className="nav-link active">
                View Course
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addAssignment" className="nav-link">
                Add Assignment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/viewAssignments" className="nav-link">
                View Assignment
              </Link>
            </li>
          </ul>
          <br />

          <Route path="/addAssignment" component={addAssignment} />
          <Route path="/viewAssignments" component={viewAssignment} />
          <Route path="/assignment/edit/:id" component={editAssignment} />
          <Route path="/assignment/delete/:id" component={DeleteAssignment} />
          <Route path="/viewCourse" component={ViewCourse} />
          <Route path="/instructorlist" component={InstructorList} />
          <Route path="/instructorheader" component={instructorHeader} />
        </Router>
      </div>
    );
  }
}
