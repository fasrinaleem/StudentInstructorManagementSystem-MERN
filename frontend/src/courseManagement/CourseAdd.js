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
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      courseName: "",
      description: "",
      startDate: "",
      duration: "",
      instructors: [],
      instructorsList: [],
      errors: {}
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

  onSubmit(e) {
    e.preventDefault();

    const {
      courseName,
      description,
      startDate,
      duration,
      instructors
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

    console.log(`Form Submitted`);
    console.log(`Course Name : ${this.state.courseName}`);
    console.log(`Description : ${this.state.description}`);
    console.log(`Start Date : ${this.state.startDate}`);
    console.log(`Duration : ${this.state.duration}`);
    console.log(`Instructor : ${this.state.instructors}`);

    const newUser = {
      courseName: this.state.courseName,
      description: this.state.description,
      startDate: this.state.startDate,
      duration: this.state.duration,
      instructorName: this.state.instructors
    };

    axios.post("http://localhost:4000/api/course/add", newUser).then(res => {
      console.log(res.data);
      this.props.history.push(`/viewcourse`);
    });

    // //Clear state after error checking(When click submit button)
    this.setState({
      courseName: "",
      description: "",
      startDate: "",
      duration: "",
      instructors: ""
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
                  <TextInputGroup
                    label="Duration"
                    name="duration"
                    placeholder=" Enter Duration"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    error={errors.duration}
                  />
                  <label> Instructors </label>
                  <select
                    className="form-control"
                    id="instructors"
                    name="instructors"
                    onChange={this.onChangeInstructor}
                  >
                    <option value="">------</option>
                    {this.state.instructorsList.map(instructors => {
                      return (
                        <option value={instructors._id} key={instructors._id}>
                          {instructors.name}
                        </option>
                      );
                    })}
                  </select>

                  {/* <select
                    name="instructors"
                    id="instructors"
                    className="form-control"
                    onChange={this.onChangeInstructor}
                    required
                  >
                    <option value="">-------</option>
                    {this.state.instructorsList.map(instructor => (
                      <option value={instructor._id} key={instructor._id}>
                        {instructor.name}
                      </option>
                    ))}
                  </select> */}

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

export default CourseAdd;
