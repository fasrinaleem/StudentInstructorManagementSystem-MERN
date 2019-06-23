import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class StudentSignup extends Component {
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

    const { studentName, email, nic, course } = this.state;

    //Check for errors
    if (studentName === "") {
      this.setState({ errors: { studentName: "student Name is required" } });
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
    console.log(`Email Name : ${this.state.email}`);
    console.log(`NIC Name : ${this.state.nic}`);
    console.log(`Course Name : ${this.state.course}`);
   

    const newUser = {
      studentName: this.state.studentName,
      email: this.state.email,
      nic: this.state.nic,
      course: this.state.course,
      
    };

    axios
      .post("http://localhost:4000/api/student/add", newUser)
      .then(res => console.log(res.data));

    //Clear state after error checking(When click submit button)
    this.setState({
      studentName: "",
      email: "",
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
                    name="email"
                    placeholder=" Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    error={errors.email}
                  />{" "}

                  <TextInputGroup
                    label=""
                    name="nic"
                    placeholder=" NIC number"
                    value={this.state.nic}
                    onChange={this.onChangeNic}
                    error={errors.nic}
                  />{" "}{" "}{" "}
             
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
                        <option value={course.courseName} key={course.courseName}>
                          {course.courseName}
                        </option>
                      );
                    })}
                  </select>
                
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
                                  </div>{" "} */}
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

export default StudentSignup;
