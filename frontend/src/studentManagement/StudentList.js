import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Student = props => (
  <tr>
    <td> {props.student.studentName} </td>{" "}
    <td> {props.student.instructorName} </td>
    <td> {props.student.year} </td>{" "}
    <td>
      <Link to={"/update/" + props.student._id}> Edit </Link>{" "}
      <Link to={"/delete/" + props.student._id}> Delete </Link>{" "}
    </td>{" "}
  </tr>
);
class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
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
      <div>
        <h3> students </h3>{" "}
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> student Name </th>
              <th> Instructor Name </th>
              <th> Year </th> <th> Actions </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody> {this.studentList()} </tbody>{" "}
        </table>{" "}
      </div>
    );
  }
}

export default StudentList;
