import React, { Component } from "react";
import TextInputGroup from "./layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class StudentList extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeInstructorName = this.onChangeInstructorName.bind(this);
    //    this.onChangeYear = this.onChangeYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentName: "",
      instructorName: "",
      //    year: "",
      errors: {}
    };
  }

  onChangeStudentName(e) {
    this.setState({
      studentName: e.target.value
    });
  }
  onChangeInstructorName(e) {
    this.setState({
      instructorName: e.target.value
    });
  }
  // onChangeYear(e) {
  //   this.setState({
  //     year: e.target.value
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();

    const { studentName, instructorName, year } = this.state;

    //Check for errors
    if (studentName === "") {
      this.setState({ errors: { studentName: "student Name is required" } });
      return;
    }
    if (instructorName === "") {
      this.setState({
        errors: { instructorName: "Instructor Name is required" }
      });
      return;
    }
    // if (year === "") {
    //   this.setState({ errors: { year: "Year is required" } });
    //   return;
    // }

    console.log(`Form Submitted`);
    console.log(`student Name : ${this.state.studentName}`);
    console.log(`Instructor Name : ${this.state.instructorName}`);
    console.log(`Year : ${this.state.year}`);

    const newUser = {
      studentName: this.state.studentName,
      instructorName: this.state.instructorName,
      year: this.state.year
    };

    axios
      .post("http://localhost:4000/student/add", newUser)
      .then(res => console.log(res.data));

    // //Clear state after error checking(When click submit button)
    this.setState({
      studentName: "",
      instructorName: ""
      //    year: ""
    });
  }

  //   onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //  const { studentName, instructorName, year, errors } = this.state;
    const { errors } = this.state;

    return (
      <div style={{ marginTop: 20 }}>
        <center>
          <div className="card mb-3" style={{ width: "700px" }}>
            <div style={{ width: "700px" }}>
              <div className="card-header">
                <b> Add New student </b>{" "}
              </div>{" "}
              <div className="çard-body">
                <form onSubmit={this.onSubmit}>
                  <TextInputGroup
                    label="student Name"
                    name="studentName"
                    placeholder=" Enter student Name"
                    value={this.state.studentName}
                    onChange={this.onChangeStudentName}
                    error={errors.studentName}
                  />{" "}
                  <TextInputGroup
                    label="Instructor Name"
                    name="instructorName"
                    placeholder=" Enter Instructor Name"
                    value={this.state.instructorName}
                    onChange={this.onChangeInstructorName}
                    error={errors.instructorName}
                  />{" "}
                  {/* <div className="form-group">
                                    <div className="form-check form-check-inline">
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
                                    </div>
                                  </div> */}{" "}
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

export default StudentList;
