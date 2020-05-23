import React, { Component } from "react";
import logo from "./calender-2389150_1280.png";
import { Add_Reminder, Remove_Reminder, Clear_Reminders } from "../Actions";
import { connect } from "react-redux";
class App extends Component {
  state = {
    text: "",
    date: new Date().toString(),
  };
  ret_reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div>{reminder.date}</div>
              <div
                className="btn btn-warning form-control"
                onClick={() => this.props.Remove_Reminder(reminder.id)}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div className="app container bg-dark px-5 pb-5 pt-3 mt-3  justify-content-center">
        <div className="reminder-title text-center text-light text-uppercase">
          <h1>what should i do ?</h1>
        </div>
        <img
          src={logo}
          alt="logo"
          className="rounded mx-auto d-block img-thumbnail border-50"
          style={{ width: "180px" }}
        />
        <input
          value={this.state.text}
          placeholder="Enter your task ..."
          type="text"
          className="form-control my-3"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <input
          value={this.state.date}
          type="datetime-local"
          className="form-control"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button
          className="btn btn-primary btn-block my-3"
          onClick={() => {
            this.props.Add_Reminder(this.state.text, this.state.date);
            this.setState({ text: "", date: "" });
          }}
        >
          Add Reminder
        </button>
        {this.ret_reminders()}
        <button
          className="btn btn-danger btn-block"
          onClick={() => this.props.Clear_Reminders()}
        >
          Clear Reminders
        </button>
      </div>
    );
  }
}

/* function mapDispatchToProps(dispatch) {
  return {
    Add_Reminder: () => dispatch(Add_Reminder()),
  };
} */

export default connect(
  (state) => {
    return {
      reminders: state,
    };
  },
  { Add_Reminder, Remove_Reminder, Clear_Reminders }
)(App);
