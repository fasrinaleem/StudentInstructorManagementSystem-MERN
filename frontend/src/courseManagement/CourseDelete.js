import React, { Component } from "react";
import axios from "axios";

class CourseDelete extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .delete("http://localhost:4000/api/course/" + this.props.match.params.id)
      .then(response => {})
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.delete(
      "http://localhost:4000/api/course/delete/" + this.props.match.params.id
    );

    this.props.history.push("/managecourse");
  }
  render() {
    return (
      <div>
        <h1> Course has been deleted </h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="submit"
              value="Back to Courses"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CourseDelete;
