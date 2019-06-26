import React, { Component } from "react";
import "./Login.css";
export default class Login extends Component {
  state = {
    username: ""
  };
  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = () => {
    console.log("hello");
  };
  render() {
    return (
      <div className="login-container">
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="username"
          />
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}
