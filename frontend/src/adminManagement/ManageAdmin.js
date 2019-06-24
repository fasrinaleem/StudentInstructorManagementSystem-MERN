import React, { Component } from "react";
import axios from "axios";
import { Link, BrowserRouter, Route } from "react-router-dom";

const Admin = props => (
    <tr>
    <td>{props.admin.adminID}</td>
    <td>{props.admin.name}</td>
    <td>{props.admin.email}</td>
    <td>{props.admin.password}</td>
  
      <td style={{ width:"250px"}}>
        <Link
          to={"/admin/edit/" + props.admin._id}
          className=" btn btn-warning"
          style={{
            fontSize:"15px"
          }}
        >
          {" "}
          Edit{" "}
        </Link>
        {" "}
        <Link
          to={"/admin/delete/" + props.admin._id}
          className="btn btn-danger"
          style={{
            fontSize:"15px"
          }}
        >
          {" "}
          Delete{" "}
        </Link>
      </td>
    </tr>
  );


class ManageAdmin extends Component{
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


  render(){


  return(
    <div>
    <h3
      style={{
        color: "white"
      }}
    />
    <table className="table table-striped" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th> Name </th>
          <th> mail </th>
          <th> phone number </th>
          <th> password</th>
          <th> Actions</th>
        </tr>
      </thead>
      <tbody>{this.adminList()}</tbody>
    </table>
  </div>
  ); 
}    

}


export default ManageAdmin;
