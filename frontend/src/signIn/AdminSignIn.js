import React, { Component } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
const keys = require("../config/key.json");
const JWT_KEY = keys.JWT_KEY;

class AdminSignIn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      adminID: "",
      email: "",
      password: "",
      userType: ""
    };
  }
  onChangeID = e => {
    this.setState({
      adminID: e.target.value
    });
  };

  onChangeUserType = e => {
    this.setState({
      userType: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const new_admin = {
      adminID: this.state.adminID,
      password: this.state.password
    };

    if (!new_admin.adminID) {
      alert("Enter Admin ID");
    } else if (!new_admin.password) {
      alert("Enter Password");
    } else if (!new_admin.adminID && !new_admin.password) {
      alert("Enter Admin Credentials");
    } else {
      axios
        .post("http://localhost:4000/api/admin/login", new_admin)
        .then(res => {
          if (res.status === 200) {
            alert("Login Success! Welcome, " + this.state.adminID);
            this.props.history.push("/admin");
          } else {
            alert("Login Failed! Please try again!");
          }
        });
    }
  };

  render() {
    return (
      <div>
        <h2 align="center">ADMIN LOGIN</h2> <br />
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group col-7">
              <label htmlFor="exampleInputEmail1">
                <b>Admin ID</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="adminID"
                aria-describedby="emailHelp"
                value={this.state.adminID}
                onChange={this.onChangeID}
                placeholder="Admin ID"
              />
            </div>
            <div className="form-group col-7">
              <label htmlFor="exampleInputPassword1">
                <b>Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                id="password"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminSignIn;
