import React, { Component } from "react";
import axios from "axios";

class StudentDelete extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .delete("http://localhost:4000/api/student/delete" + this.props.match.params.id)
      .then(response => {}, alert("student deleted successfully" ))
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.delete( "http://localhost:4000/api/student/delete/" + this.props.match.params.id
    );

    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1> student has been deleted </h1>{" "}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="submit"
              value="Back to students"
              className="btn btn-primary"
            />
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default StudentDelete;
