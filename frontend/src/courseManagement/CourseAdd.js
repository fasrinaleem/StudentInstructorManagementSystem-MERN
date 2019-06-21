import React, { Component } from "react";
import TextInputGroup from "./layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class CourseList extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangeInstructorName = this.onChangeInstructorName.bind(this);
    //    this.onChangeYear = this.onChangeYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      courseName: "",
      instructorName: "",
      //    year: "",
      errors: {}
    };
  }

  onChangeCourseName(e) {
    this.setState({
      courseName: e.target.value
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

    const { courseName, instructorName, year } = this.state;

    //Check for errors
    if (courseName === "") {
      this.setState({ errors: { courseName: "Course Name is required" } });
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
    console.log(`Course Name : ${this.state.courseName}`);
    console.log(`Instructor Name : ${this.state.instructorName}`);
    console.log(`Year : ${this.state.year}`);

    const newUser = {
      courseName: this.state.courseName,
      instructorName: this.state.instructorName,
      year: this.state.year
    };

    axios.post("http://localhost:4000/course/add", newUser).then(res => {
      console.log(res.data);
      this.props.history.push(`/courselist`);
    });

    // //Clear state after error checking(When click submit button)
    this.setState({
      courseName: "",
      instructorName: ""
      //    year: ""
    });
  }

  //   onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //  const { courseName, instructorName, year, errors } = this.state;
    const { errors } = this.state;

    return (
      <div style={{ marginTop: 20 }}>
        <center>
          <div className="card mb-3" style={{ width: "700px" }}>
            <div style={{ width: "700px" }}>
              <div className="card-header">
                <b> Add New Course </b>
              </div>
              <div className="çard-body">
                <form onSubmit={this.onSubmit}>
                  <TextInputGroup
                    label="Course Name"
                    name="courseName"
                    placeholder=" Enter Course Name"
                    value={this.state.courseName}
                    onChange={this.onChangeCourseName}
                    error={errors.courseName}
                  />
                  <TextInputGroup
                    label="Instructor Name"
                    name="instructorName"
                    placeholder=" Enter Instructor Name"
                    value={this.state.instructorName}
                    onChange={this.onChangeInstructorName}
                    error={errors.instructorName}
                  />
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
                  </div> */}
                  <div>
                    <button
                      class="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default CourseList;
