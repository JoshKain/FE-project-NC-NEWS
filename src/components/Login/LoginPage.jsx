import React, { Component } from "react";
import * as api from "../api";
import User from "./User";
import "./Login.css";
import Error from "../ErrorComponent/Error";

const uuidv4 = require("uuid/v4");

export default class LoginPage extends Component {
  state = {
    users: [],
    err: null,
    username: "",
    name: "",
    moreLetters: false,
    isLoading: false
  };
  handleName = event => {
    this.setState({ name: event.target.value });
  };
  handleUserName = event => {
    this.setState({ username: event.target.value });
  };
  addUser = ({ user }) => {
    const { users } = this.state;
    const userArr = [...users];
    this.setState({ users: [user, ...userArr] });
  };

  render() {
    const { users, err, moreLetters, isLoading } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    if (isLoading === false) {
      return (
        <div className="loader">
          <div className="outer" />
          <div className="middle" />
          <div className="inner" />
        </div>
      );
    }
    return (
      <div className="user-container">
        <h3>New User </h3>
        <div className="user-form">
          <form>
            {" "}
            <label>
              Name:
              <input
                type="text"
                name="Name"
                value={this.state.name}
                onChange={this.handleName}
                placeholder="Name..."
                className="input"
              />{" "}
            </label>
            <label>
              Username:
              <input
                type="text"
                name="userName"
                value={this.state.username}
                onChange={this.handleUserName}
                placeholder="Username..."
                className="input"
              />{" "}
            </label>
            <button className="submit-buttons" onClick={this.handleSubmit}>
              Submit NewUser
            </button>
            {moreLetters && (
              <p className="CommentTag">
                UserName or name Space Needs Be Filled in Please
              </p>
            )}
          </form>
        </div>
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
      </div>
    );
  }
  componentDidMount() {
    api
      .getUsers()
      .then(users => {
        this.setState({ users, isLoading: true });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, name } = this.state;

    if (name.length > 1 || username.length > 1) {
      api.randomImage().then(response => {
        api.postUser({ name, username, response }).then(user => {
          this.addUser({ user });
          this.setState({ moreLetters: false });
          this.setState({ name: "" });
          this.setState({ username: "" });
        });
      });
    } else {
      this.setState({ moreLetters: true });
      this.setState({ username: "" });
    }
  };
}
