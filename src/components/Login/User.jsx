import { Button } from "@material-ui/core";
import React, { Component } from "react";
const uuidv5 = require("uuid/v5");

export default class User extends Component {
  render() {
    const { name, username, avatar_url } = this.props.user;

    return (
      <div>
        <h1>{name}</h1>
        <img
          src={avatar_url}
          alt={uuidv5(`${avatar_url}`, uuidv5.URL)}
          style={{ width: 100, height: 100 }}
        />
        <p>Username :{username}</p>
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
      </div>
    );
  }
}
