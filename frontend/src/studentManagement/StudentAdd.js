import React, { Component } from "react";
import TextInputGroup from "./layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class StudentAdd extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentName: "",
      studentID: "",
      email: "",
      password: "",
      nic: "",
      course: "",
      courseList: [],
      errors: {}
    };
  }

  onChangeStudentName(e) {
    this.setState({
      studentName: e.target.value
    });
  }
  onChangeStudentID(e) {
    this.setState({
      studentID: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeNic(e) {
    this.setState({
      nic: e.target.value
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/course/")
      .then(response => {
        this.setState({ courseList: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeCourse(e) {
    this.setState({
      course: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { studentName, studentID, email, password, nic, course } = this.state;

    //Check for errors
    if (studentName === "") {
      this.setState({ errors: { studentName: "student Name is required" } });
      return;
    }
    if (studentID === "") {
      this.setState({ errors: { studentID: "student ID is required" } });
      return;
    }
    if (password === "") {
      this.setState({ errors: { password: "Password is required" } });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email is required" }
      });
      return;
    }

    if (nic === "") {
      this.setState({
        errors: { nic: "NIC number is required" }
      });
      return;
    }
    if (nic.length < 10 || nic.length > 11) {
      this.setState({
        errors: { nic: "NIC number is not correct" }
      });
      return;
    }
    if (course === "") {
      this.setState({
        errors: { course: "Course is required" }
      });
      return;
    }

    console.log(`Form Submitted`);
    console.log(`student Name : ${this.state.studentName}`);
    console.log(`student ID : ${this.state.studentID}`);
    console.log(`Email : ${this.state.email}`);
    console.log(`password : ${this.state.password}`);
    console.log(`NIC Number : ${this.state.nic}`);
    console.log(`Course Name : ${this.state.course}`);

    const newUser = {
      studentName: this.state.studentName,
      studentID: this.state.studentID,
      email: this.state.email,
      password: this.state.password,
      nic: this.state.nic,
      course: this.state.course
    };

    axios
      .post("http://localhost:4000/api/student/add", newUser)
      .then(
        res => console.log(res.data),
        alert("You are successfully registered")
      );

    //Clear state after error checking(When click submit button)
    this.setState({
      studentName: "",
      studentID: "",
      email: "",
      password: "",
      nic: "",
      course: ""
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div style={{ marginTop: 20 }}>
        <center>
          <div className="card mb-3" style={{ width: "700px" }}>
            <div style={{ width: "700px" }}>
              <div className="card-header">
                <b> Student Registration</b>{" "}
              </div>{" "}
              <div className="card-header">
                <b> Please enter full information and click submit</b>{" "}
              </div>{" "}
              <div className="çard-body">
                <form onSubmit={this.onSubmit}>
                  <TextInputGroup
                    label=""
                    name="studentName"
                    placeholder=" Full
                     Name"
                    value={this.state.studentName}
                    onChange={this.onChangeStudentName}
                    error={errors.studentName}
                  />{" "}
                  <TextInputGroup
                    label=""
                    name="studentID"
                    placeholder=" Student ID"
                    value={this.state.studentID}
                    onChange={this.onChangeStudentID}
                    error={errors.studentID}
                  />{" "}
                  <TextInputGroup
                    label=""
                    name="email"
                    placeholder=" Email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    error={errors.email}
                  />{" "}
                  <TextInputGroup
                    label=""
                    name="password"
                    placeholder=" Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    error={errors.password}
                  />{" "}
                  <TextInputGroup
                    label=""
                    name="nic"
                    placeholder=" NIC number"
                    value={this.state.nic}
                    onChange={this.onChangeNic}
                    error={errors.nic}
                  />{" "}
                  <label> Courses </label>
                  <select
                    className="form-control"
                    id="course"
                    name="course"
                    onChange={this.onChangeCourse}
                  >
                    <option value="">------</option>
                    {this.state.courseList.map(course => {
                      return (
                        <option
                          value={course.courseName}
                          key={course.courseName}
                        >
                          {course.courseName}
                        </option>
                      );
                    })}
                  </select>
                  <div>
                    <button
                      class="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      {" "}
                      Submit{" "}
                    </button>{" "}
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </center>{" "}
      </div>
    );
  }
}

export default StudentAdd;
