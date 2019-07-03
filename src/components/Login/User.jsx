import "./Login.css";
import { Link } from "@reach/router";

import React from "react";

export default function User(props) {
  const { name, username, avatar_url } = props.user;
  return (
    <div className="each-user">
      <h1 className="name">{name}</h1>
      <img src={avatar_url} alt={avatar_url} className="avatar" />
      <p>Username :{username}</p>
      <Link to="/user">
        <button
          value={props.user}
          onClick={() => props.handleChangeUser(props.user)}
          user={props.user}
          className="submit-button"
        >
          {" "}
          Login As User
        </button>
      </Link>
    </div>
  );
}
