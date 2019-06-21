import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Course = props => (
  <tr>
    <td> {props.course.courseName} </td>
    <td> {props.course.instructorName} </td>
    <td> {props.course.year} </td>
    <td>
      <Link to={"/update/" + props.course._id}> Edit </Link>
      <Link to={"/delete/" + props.course._id}> Delete </Link>
    </td>
  </tr>
);
class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/course/")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/course/")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  courseList() {
    return this.state.courses.map(function(currentCourse, i) {
      return <Course course={currentCourse} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3> Courses </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Course Name </th>
              <th> Instructor Name </th>
              <th> Year </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>{this.courseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default CourseList;
