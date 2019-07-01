import { Button } from "@material-ui/core";
import React, { Component } from "react";
import "./Login.css";
import { Link } from "@reach/router";

export default class User extends Component {
  render() {
    const { name, username, avatar_url } = this.props.user;

    return (
      <div className="each-user">
        <h1>{name}</h1>
        <img src={avatar_url} alt={avatar_url} className="avatar" />
        <p>Username :{username}</p>
        <Link to="/user">
          <Button
            value={this.props.user}
            onClick={() => this.props.handleChangeUser(this.props.user)}
            variant="contained"
            color="primary"
            user={this.props.user}
          >
            {" "}
            Login As User
          </Button>
        </Link>
      </div>
    );
  }
}
