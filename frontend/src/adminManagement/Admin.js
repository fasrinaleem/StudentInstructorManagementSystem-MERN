import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Admin extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="http://courseweb.sliit.lk/"
              target="_blank"
            >
              {/* <img src={logo} width="50" height="50" alt="courseweb.sliit.lk" /> */}
            </a>

            <Link to="/" className="navbar-brand">
              Course Management
            </Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/admin" className="nav-link">
                    Courses
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">
                    Add Courses
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/managecourse" className="nav-link">
                    Manage Courses
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/admin" exact component={Admin} />
        </div>
      </Router>
    );
  }
}

export default Admin;
