import React, { Component } from "react";
import logo from "./calender-2389150_1280.png";
import { Add_Reminder } from "../Actions";
import { connect } from "react-redux";
class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };
  render() {
    return (
      <div className="app container bg-dark px-5 pb-5 pt-3 mt-5  justify-content-center">
        <div className="reminder-title text-center text-light text-uppercase">
          <h1>what should i do ?</h1>
        </div>
        <img
          src={logo}
          className="rounded mx-auto d-block img-thumbnail border-50"
          style={{ width: "180px" }}
        />
        <input
          placeholder="Enter your task ..."
          type="text"
          className="form-control my-3"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <input
          type="datetime-local"
          className="form-control"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button
          className="btn btn-primary btn-block my-3"
          onClick={() => Add_Reminder(this.state.text, this.state.date)}
        >
          Add Reminder
        </button>
        <button className="btn btn-danger btn-block">Clear Reminders</button>
      </div>
    );
  }
}

/* function mapDispatchToProps(dispatch) {
  return {
    Add_Reminder: () => dispatch(Add_Reminder()),
  };
} */

export default connect(null, { Add_Reminder })(App);
