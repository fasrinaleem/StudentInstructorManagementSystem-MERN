import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinkAssignment extends Component {
  render() {
    return (
      <div>
        <h5>Assignments </h5>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Assigment Name </th>
              <th> Status </th>
              <th> Due date </th> <th> File </th>{" "}
            </tr>{" "}
          </thead>{" "}
          {
            <tbody>
              <tr>
                <th> </th>
                <th> </th>
                <th> </th>{" "}
                <th>
                  {" "}
                  Select File
                  <Link to="/assignmentupload" className="navbar-brand">
                    Upload File
                  </Link>
                </th>{" "}
              </tr>{" "}
            </tbody>
          }
          {/* {<tbody> {this.studentList()} </tbody>} */}
        </table>{" "}
      </div>
    );
  }
}

export default LinkAssignment;
