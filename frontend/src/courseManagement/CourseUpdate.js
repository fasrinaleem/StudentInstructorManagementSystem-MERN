import React, { Component } from "react";
import axios from "axios";

class CourseUpdate extends Component {
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
      errors: {},
      instructors: [],
      instructorsList: [],
      instructoremail: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/course/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          courseName: response.data.courseName,
          description: response.data.description,
          startDate: response.data.startDate,
          duration: response.data.duration
        });
      })
      .catch(function(error) {
        console.log(error);
      });

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

    const newUser = {
      courseName: this.state.courseName,
      description: this.state.description,
      startDate: this.state.startDate,
      duration: this.state.duration,
      instructorName: this.state.instructors
    };

    const updatedCourse = {
      courseName: this.state.courseName,
      description: this.state.description,
      startDate: this.state.startDate,
      duration: this.state.duration,
      instructorName: this.state.instructors,
      instructorEmail: this.state.instructoremail
    };

    axios
      .post(
        "http://localhost:4000/api/course/update/" + this.props.match.params.id,
        updatedCourse
      )
      .then(res => console.log(res.data));

    this.props.history.push("/managecourse");
  }
  render() {
    return (
      <div>
        <h3> Update Course </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Course Name </label>
            <input
              type="text"
              className="form-control"
              value={this.state.courseName}
              onChange={this.onChangeCourseName}
            />
          </div>
          <div className="form-group">
            <label> Description </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label> Start Date </label>
            <input
              type="date"
              className="form-control"
              value={this.state.startDate}
              onChange={this.onChangeStartDate}
              required
            />
          </div>
          <div className="form-group">
            <label> Duration </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
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

          <label> Instructor Email </label>
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
                <option value={instructorEmail.mail} key={instructorEmail._id}>
                  {instructorEmail.mail}
                </option>
              );
            })}
          </select>
          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Course"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CourseUpdate;
