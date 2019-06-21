import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Courses from "./courseManagement/Courses";
import Home from "./Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Admin from "./adminManagement/Admin";
import Students from "./studentManagement/Students";
import StudentSignup from "./studentManagement/Signup/StudentSignup";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/admin" component={Admin} />
            <Route path="/students" component={Students} />{" "}
            <Route path="/signup" component={StudentSignup} />{" "}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
