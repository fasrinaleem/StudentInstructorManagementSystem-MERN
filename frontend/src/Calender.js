import React, { Component } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";

import "./Calender.less";

export default class CalendarClass extends Component {
  state = {
    value: new Date()
  };

  onChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div className="Sample" style={{ marginRight: "10px" }}>
        <h1> Calendar </h1>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar onChange={this.onChange} showWeekNumbers value={value} />
          </main>
        </div>
      </div>
    );
  }
}
