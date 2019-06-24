import React, { Component } from "react";
import axios from "axios";
import { Link, BrowserRouter, Route } from "react-router-dom";

const Admin = props => (
  <tr>
   <td>{props.admin.adminID}</td>
    <td>{props.admin.name}</td>
    <td>{props.admin.email}</td>
    <td>{props.admin.password}</td>

  </tr>
);

class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = { admins: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/admin/edit")
      .then(response => {
        this.setState({ admins: response.data });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate(){
    axios
    .get("http://localhost:4000/api/admin/edit")
    .then(response => {
      this.setState({ admins: response.data });
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  //   componentDidUpdate(){
  //     axios.get("http://localhost:3000/api/admin/edit")
  //     .then(response => {
  //         this.setState({ admins: response.data });
  //     })
  //     .catch(function (error){
  //         console.log(error);
  //     })
  //   }

  adminList() {
    return this.state.admins.map(function(currentAdmin, i) {
      return <Admin admin={currentAdmin} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3
          style={{
            color: "white"
          }}
        />
        <table className="table table-striped" style={{ marginTop: 20,marginLeft:"5px",marginRight:"10px"}}>
          <thead>
            <tr>
              <th> Admin ID </th>
              <th> Admin Name  </th>
              <th> Mail </th>
              <th> password</th>
             
            </tr>
          </thead>
          <tbody>{this.adminList()}</tbody>
        </table>
      </div>
    );
  }
}

export default AdminView;
