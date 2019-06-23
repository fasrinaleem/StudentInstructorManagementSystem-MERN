import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AssignmentUpload from "./AssignmentUpload";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AssignmentLink from "./LinkAssignment";

const Student = props => (
  <tr>
    <td> {props.student.studentName} </td> <td> {props.student.email} </td>{" "}
    <td> {props.student.nic} </td> <td> {props.student.course} </td>{" "}
    <td>
      <Link to={"/update/" + props.student._id}> Edit </Link>{" "}
      <Link to={"/delete/" + props.student._id}> Delete </Link>{" "}
    </td>{" "}
  </tr>
);
class StudentDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };

    // this.onChangeStudentName = this.onChangeStudentName.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);

    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentName: "",
      email: "",
      nic: "",
      course: "",
      errors: {}
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/student/")
      .then(response => {
        this.setState({ students: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/api/student/")
      .then(response => {
        this.setState({ students: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  studentList() {
    return this.state.students.map(function(currentStudent, i) {
      return <Student student={currentStudent} key={i} />;
    });
  }

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
          </div>
          
          <Route path="/assignmentupload" component={AssignmentUpload} />
          <Route path="/assignmentlink" component={AssignmentLink} />
        </Router>
      </div>
    );
  }
}

export default StudentDashboard;
