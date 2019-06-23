import React, { Component } from "react";
import TextInputGroup from "./layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class CourseAdd extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeInstructor = this.onChangeInstructor.bind(this);
    this.onChangeInstructorEmail = this.onChangeInstructorEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      courseName: "",
      description: "",
      startDate: "",
      duration: "",
      instructors: [],
      instructorsList: [],
      errors: {},
      instructoremail: [],
      mobile: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/instructor/all")
      .then(response => {
        this.setState({ instructorsList: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  //Setting State
  onChangeCourseName(e) {
    this.setState({
      courseName: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeStartDate(e) {
    this.setState({
      startDate: e.target.value
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }
  onChangeInstructor(e) {
    this.setState({
      instructors: e.target.value
    });
  }
  onChangeInstructorEmail(e) {
    this.setState({
      instructoremail: e.target.value
    });
  }
  handleMobileChange = e => {
    let value = e.target.value;
    if (value !== "") {
      this.setState({ mobile: e.target.value });
    } else {
      this.setState({ mobile: "" });
    }
  };

  onSubmit(e) {
    e.preventDefault();

    const {
      courseName,
      description,
      startDate,
      duration,
      instructors,
      instructoremail
    } = this.state;

    //Check for errors
    if (courseName === "") {
      this.setState({ errors: { courseName: "Course Name is required" } });
      return;
    }
    if (description === "") {
      this.setState({ errors: { description: "Description is required" } });
      return;
    }
    if (startDate === "") {
      this.setState({ errors: { startDate: "Starting Date is required" } });
      return;
    }
    if (duration === "") {
      this.setState({ errors: { duration: "Duration is required" } });
      return;
    }
    if (instructors === "") {
      this.setState({ errors: { instructors: "Instrutor is required" } });
      return;
    }
    if (instructoremail === "") {
      this.setState({
        errors: { instructoremail: "Instrutor Email is required" }
      });
      return;
    }

    console.log(`Form Submitted`);
    console.log(`Course Name : ${this.state.courseName}`);
    console.log(`Description : ${this.state.description}`);
    console.log(`Start Date : ${this.state.startDate}`);
    console.log(`Duration : ${this.state.duration}`);
    console.log(`Instructor : ${this.state.instructors}`);
    console.log(`Instructor Email: ${this.state.instructoremail}`);
    console.log(`Instructor Number: ${this.state.mobile}`);

    const newUser = {
      courseName: this.state.courseName,
      description: this.state.description,
      startDate: this.state.startDate,
      duration: this.state.duration,
      instructorName: this.state.instructors,
      instructorEmail: this.state.instructoremail
    };

    axios.post("http://localhost:4000/api/course/add", newUser).then(res => {
      console.log(res.data);
      this.props.history.push(`/viewcourse`);
    });

    let mob = this.state.mobile;
    axios.post("http://localhost:4000/api/course/sendsms", {
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        to: mob
      })
    });
    // .then(response => {
    //   console.log("SMS : " + response);
    //   return response.json();
    // })
    // .then(json => {
    //   console.log("SMS has been sended to : " + json.to + " Successfuly");
    // });

    // //Clear state after error checking(When click submit button)
    this.setState({
      courseName: "",
      description: "",
      startDate: "",
      duration: "",
      instructors: "",
      instructoremail: ""
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div style={{ marginTop: 10 }}>
        <h3
          style={{
            color: "black"
          }}
        >
          {" "}
          Add New Course{" "}
        </h3>
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
                    label="Description"
                    name="description"
                    placeholder=" Enter Description"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    error={errors.description}
                  />
                  <TextInputGroup
                    label="Starting Date"
                    type="date"
                    name="startDate"
                    placeholder=" Enter Starting Name"
                    value={this.state.startDate}
                    onChange={this.onChangeStartDate}
                    error={errors.startDate}
                  />
                  <label> Instructor Name </label>
                  <select
                    className="form-control"
                    id="instructors"
                    name="instructors"
                    onChange={this.onChangeInstructor}
                    required
                  >
                    <option value="">------</option>
                    {this.state.instructorsList.map(instructors => {
                      return (
                        <option value={instructors.name} key={instructors._id}>
                          {instructors.name}
                        </option>
                      );
                    })}
                  </select>

                  <label> Instructor's Email </label>
                  <select
                    className="form-control"
                    id="instructoremail"
                    name="instructoremail"
                    onChange={this.onChangeInstructorEmail}
                    required
                  >
                    <option value="">------</option>
                    {this.state.instructorsList.map(instructorEmail => {
                      return (
                        <option
                          value={instructorEmail.mail}
                          key={instructorEmail._id}
                        >
                          {instructorEmail.name} --> {instructorEmail.mail}
                        </option>
                      );
                    })}
                  </select>
                  <TextInputGroup
                    label="Duration"
                    name="duration"
                    placeholder=" Enter Duration"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    error={errors.duration}
                  />
                  {/* <TextInputGroup
                    label="Instructor Mobile Number"
                    name="mobile"
                    placeholder=" Enter Mobile Number"
                    onChange={this.handleMobileChange}
                  /> */}

                  <div>
                    <button
                      class="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      style={{ backgroundColor: "#00ff00" }}
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

export default CourseAdd;
