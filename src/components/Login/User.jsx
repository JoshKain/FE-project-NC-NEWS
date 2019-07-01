import { Button } from "@material-ui/core";

import "./Login.css";
import { Link } from "@reach/router";

import React from "react";

export default function User(props) {
  const { name, username, avatar_url } = props.user;
  return (
    <div className="each-user">
      <h1>{name}</h1>
      <img src={avatar_url} alt={avatar_url} className="avatar" />
      <p>Username :{username}</p>
      <Link to="/user">
        <Button
          value={props.user}
          onClick={() => props.handleChangeUser(props.user)}
          variant="contained"
          color="primary"
          user={props.user}
        >
          {" "}
          Login As User
        </Button>
      </Link>
    </div>
  );
}
