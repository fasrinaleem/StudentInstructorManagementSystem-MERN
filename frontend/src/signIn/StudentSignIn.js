import React, { Component } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
const keys = require("../config/key.json");
const JWT_KEY = keys.JWT_KEY;

class StudentSignIn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      studentID: "",
      email: "",
      password: "",
      userType: ""
    };
  }
  onChangeStudentID = e => {
    this.setState({
      studentID: e.target.value
    });
  };

  onChangeUserType = e => {
    this.setState({
      userType: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const new_student = {
      studentID: this.state.studentID,
      password: this.state.password
    };

    if (!new_student.studentID) {
      alert("Enter Student ID");
    } else if (!new_student.password) {
      alert("Enter Password");
    } else if (!new_student.studentID && !new_student.password) {
      alert("Enter Student Credentials");
    } else {
      axios
        .post("http://localhost:4000/api/students/login", new_student)
        .then(res => {
          if (res.status === 200) {
            alert("Login Success! Welcome, " + this.state.studentID);
            this.props.history.push("/studentlist");
          } else {
            alert("Login Failed! Please try again!");
          }
        });
    }
  };

  render() {
    return (
      <div>
        <h2 align="center">STUDENT LOGIN</h2> <br />
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group col-7">
              <label htmlFor="exampleInputEmail1">
                <b>Student ID</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="studentID"
                aria-describedby="emailHelp"
                value={this.state.studentID}
                onChange={this.onChangeStudentID}
                placeholder="Student ID"
              />
            </div>
            <div className="form-group col-7">
              <label htmlFor="exampleInputPassword1">
                <b>Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                id="password"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default StudentSignIn;
