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
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      courseName: "",
      description: "",
      startDate: "",
      duration: "",
      errors: {}
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

  onSubmit(e) {
    e.preventDefault();
    const updatedCourse = {
      courseName: this.state.courseName,
      description: this.state.description,
      startDate: this.state.startDate,
      duration: this.state.duration,
      instructors: this.state.instructors
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
