import React, { Component } from "react";
import axios from "axios";

class StudentUpdate extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
  
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentName: "",
      email: "",
      nic: "",
      course: ""
      
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/student/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          studentName: response.data.studentName,
          email: response.data.email,
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

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
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
      email: this.state.email,
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
            <label> Email </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
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
            {/* <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="year"
                                id="year1"
                                value="year1"
                                checked={this.state.year === "Year 01"}
                                onChange={this.onChangeYear}
                              />
                              <label className="form-check-label"> Year 01 </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="year"
                                id="year2"
                                value="year2"
                                checked={this.state.year === "Year 02"}
                                onChange={this.onChangeYear}
                              />
                              <label className="form-check-label"> Year 02 </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="year"
                                id="year3"
                                value="year3"
                                checked={this.state.year === "Year 03"}
                                onChange={this.onChangeYear}
                              />
                              <label className="form-check-label"> Year 03 </label>
                            </div> */}
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
