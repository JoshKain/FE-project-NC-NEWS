import React, { Component } from "react";
import * as api from "../api";
import User from "./User";
import "./Login.css";
import Error from "../ErrorComponent/Error";
const uuidv4 = require("uuid/v4");

export default class LoginPage extends Component {
  state = { users: [], err: null };
  render() {
    const { users, err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
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
    api
      .getUsers()
      .then(users => {
        this.setState({ users });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }
}
