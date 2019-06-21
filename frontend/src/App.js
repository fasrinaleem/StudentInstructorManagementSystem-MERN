import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Courses from "./courseManagement/Courses";
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
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/admin" component={Admin} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
