import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/courselist" component={CourseList} />
    <Route path="/studentlist" cmponent={StudentList} />
  </Switch>
);
