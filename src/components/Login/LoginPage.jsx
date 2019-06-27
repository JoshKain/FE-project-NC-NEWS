import React, { Component } from "react";
import * as api from "../api";
import User from "./User";
const uuidv4 = require("uuid/v4");

export default class LoginPage extends Component {
  state = { users: [] };
  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map(user => {
          return <User user={user} key={uuidv4()} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    api.getUsers().then(users => {
      this.setState({ users });
    });
  }
}
