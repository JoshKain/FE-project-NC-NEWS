import React from "react";
import { Button } from "@material-ui/core";
const uuidv5 = require("uuid/v5");

const User = ({ user }) => {
  const { name, username, avatar_url } = user;

  return (
    <div>
      <h1>{name}</h1>
      <img
        src={avatar_url}
        alt={uuidv5(`${avatar_url}`, uuidv5.URL)}
        style={{ width: 100, height: 100 }}
      />
      <p>Username :{username}</p>
      <Button variant="contained" color="primary">
        {" "}
        Login As User
      </Button>
    </div>
  );
};

export default User;
