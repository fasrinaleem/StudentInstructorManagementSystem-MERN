import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Courses from "./courseManagement/Courses";
import Students from "./studentManagement/Students";
import StudentSignup from "./studentManagement/Signup/StudentSignup";
import StudentDashbord from "./studentManagement/StudentDashboard";
import Home from "./Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Admin from "./adminManagement/Admin";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />{" "}
            <Route path="/coursexs" component={Courses} />{" "}
            <Route path="/admin" component={Admin} />{" "}
            <Route path="/students" component={Students} />{" "}
            <Route path="/signup" component={StudentSignup} />{" "}
            <Route path="/studentdashbord" component={StudentDashbord} />{" "}
          </Switch>{" "}
          <Footer />
        </div>{" "}
      </Router>
    );
  }
}

export default App;
