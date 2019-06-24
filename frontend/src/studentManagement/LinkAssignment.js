import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment"; 

const Assignment = props => (
  <tr>
    <td> {props.assignments.name} </td>
    <td> {props.assignments.status} </td> 
    <td> {props.assignments.dueDate} </td>
   
    <td>  <Moment diff="2019-06-23" unit="days">{props.assignments.dueDate}</Moment> days left </td>{" "}

    <td> {props.assignments.file} </td>{" "}
    <td>
      <Link
        to={ "/assignmentupload/" + props.assignments._id}
        className="btn btn-danger"
        style={{ fontSize: "15px", width: "100px" }}
      >
        <span> Upload</span>
      </Link>
    </td>{" "}
  </tr>
);
class LinkAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = { assignments: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/assignments/all")
      .then(response => {
        this.setState({ assignments: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  componentDidUpdate() {
    axios
      .get("http://localhost:4000/api/assignments/all")
      .then(response => {
        this.setState({ assignments: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  assignmentList() {
    return this.state.assignments.map(function(currentAssignment, i) {
      return <Assignment assignments={currentAssignment} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3> Assignments </h3>{" "}
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Assignment Name </th>
              <th> Satus </th>
              <th> Due date </th>
              <th> Days left </th>
              
            </tr>{" "}
          </thead>{" "}
          <tbody>   {this.assignmentList()}  </tbody>{" "}
        </table>{" "}
      </div>
    );
  }
}
export default LinkAssignment;
