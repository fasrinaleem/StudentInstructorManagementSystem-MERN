import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AdminAdd from "./AdminAdd";
import AdminView from "./AdminView";
import AdminUpdate from "./AdminUpdate";
import AdminDelete from "./AdminDelete";
import ManageAdmin from "./ManageAdmin"

class Admin extends Component {
  render() {
    return (
      <div>
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

              <Link to="/courselist" className="navbar-brand">
                Admin Management
              </Link>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/adminview" className="nav-link">
                      Admin View
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/addadmin" className="nav-link">
                      Add Admin
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/manageadmin" className="nav-link">
                      Manage Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Route path="/adminview" exact component={AdminView} />
            <Route path="/manageadmin"  component={ManageAdmin} />
            <Route path="/addadmin" component={AdminAdd} />
            <Route path="/admin/edit/:id" component={AdminUpdate} />
            <Route path="/admin/delete/:id" component={AdminDelete} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Admin;
