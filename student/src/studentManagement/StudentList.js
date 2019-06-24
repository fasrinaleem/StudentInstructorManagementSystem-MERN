import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Student = props => (
  <tr>
    <td> {props.student.studentName} </td> 
    <td> {props.student.studentID} </td> 
    <td> {props.student.email} </td>{" "}
    <td> {props.student.password} </td> 
    <td> {props.student.nic} </td> 
    <td> {props.student.course} </td>{" "}
    <td>
      <Link
        to={"/update/" + props.student._id}
        className=" btn btn-warning"
        style={{ fontSize: "15px", width: "100px"  }}
      >
        <span> edit</span>
      </Link>
      {"  "}
      <Link
        to={"/delete/" + props.student._id}
        className="btn btn-danger"
        style={{ fontSize: "15px", width: "100px" }}  
      >
        <span> delete</span>
       
      </Link>
    </td>{" "}
  </tr>
);
class StudentList extends Component {

  constructor(props) {
    super(props);
    this.state = { students: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/student/")
      .then(response => {
        this.setState({ students: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  componentDidUpdate() {
    axios
      .get("http://localhost:4000/api/student/")
      .then(response => {
        this.setState({ students: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  studentList() {
    return this.state.students.map(function(currentStudent, i) {
      return <Student student={currentStudent} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3> students </h3>{" "}
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> student Name </th>
              <th> student ID </th>
              <th> Email </th>
              <th> Password </th>
              <th> NIC number </th>
              <th> Course </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody> {this.studentList()} </tbody>{" "}
        </table>{" "}
      </div>
    );
  }
}
export default StudentList;
