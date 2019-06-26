import React, { Component } from "react";
import "./Login.css";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";

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
        <Link to="/login">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </Link>
      </div>
    );
  }
}
