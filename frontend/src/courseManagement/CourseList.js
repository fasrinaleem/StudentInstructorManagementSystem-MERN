import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/course/")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/api/course/")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  courseList() {
    return this.state.courses.map(function(currentCourse) {
      return (
        // <div className="row">
        // <div className="col-md-4">
        <div
          className="card"
          key={currentCourse.id}
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          <div className="card-header" style={{ fontSize: "20px" }}>
            <b>{currentCourse.courseName}</b>
          </div>
          <div className="card-body"> {currentCourse.description}</div>
          <div className="card-body">
            {" "}
            <b>Duration : </b> {currentCourse.duration}
          </div>
          <div className="card-body">
            {" "}
            <b> Starting Date : </b> {currentCourse.startDate}
          </div>
          <div className="card-footer">
            <Link
              to={"/viewcourse/"}
              className=" btn btn-info"
              style={{
                fontSize: "15px",
                width: "500px"
              }}
            >
              <span> View More </span>
            </Link>
            {"  "}
            <Link
              to={"/assignmentlink/" + currentCourse._id}
              className=" btn btn-success"
              style={{
                fontSize: "15px",
                width: "500px"
              }}
            >
              <span> Entroll Course </span>
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div
          className="raw"
          style={{
            marginLeft: "30px",
            marginRight: "20px",
            marginBottom: "20px"
          }}
        >
          <div className="col-md- ">{this.courseList()} </div>
        </div>
      </div>
    );
  }
}

export default CourseList;
