import React, { Component } from "react";
import * as api from "../api";
import User from "./User";
import "./Login.css";
const uuidv4 = require("uuid/v4");

export default class LoginPage extends Component {
  state = { users: [] };
  render() {
    const { users } = this.state;
    return (
      <div className="users-container">
        {users.map(user => {
          return (
            <User
              user={user}
              handleChangeUser={this.props.handleChangeUser}
              key={uuidv4()}
            />
          );
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
