import React, { Component } from "react";
import axios from "axios";

class StudentUpdate extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/student/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          studentName: response.data.studentName,
          studentID: response.data.studentID,
          email: response.data.email,
          password: response.data.password,
          nic: response.data.nic,
          course: response.data.course,
          //        year: response.data.year
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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

  onChangeCourse(e) {
    this.setState({
      course: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const updatedStudent = {
      studentName: this.state.studentName,
      studentID: this.state.studentID,
      email: this.state.email,
      password: this.state.password,
      nic: this.state.nic,
      course: this.state.course,
  
    };

    axios
      .post(
        "http://localhost:4000/api/student/update/" + this.props.match.params.id,
        updatedStudent
      )
      .then(res => console.log(res.data), alert("student updated successfully"));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3> Update Student </h3>{" "}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Student Name </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.studentName}
              onChange={this.onChangeStudentName}
            />{" "}
          </div>{" "}

          <div className="form-group">
            <label> Student ID </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.studentID}
              onChange={this.onChangeStudentID}
            />{" "}
          </div>{" "}

          <div className="form-group">
            <label> Email </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />{" "}
          </div>{" "}


          <div className="form-group">
            <label> Password  </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />{" "}
          </div>{" "}


          <div className="form-group">
            <label> NIC </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.nic}
              onChange={this.onChangeNic}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label> Course </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.course}
              onChange={this.onChangeCourse}
            />{" "}
          </div>{" "}
          <div className="form-group">
            {" "}
            
            
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update Student"
                className="btn btn-primary"
              />
            </div>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default StudentUpdate;
