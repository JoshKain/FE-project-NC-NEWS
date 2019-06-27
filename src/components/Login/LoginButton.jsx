import React, { Component } from "react";
import "./Login.css";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";

export default class LoginButton extends Component {
  render() {
    return (
      <div className="login-container">
        <Link to="/login">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </div>
    );
  }
}
