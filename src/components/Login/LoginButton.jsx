import "./Login.css";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";

import React from "react";

export default function LoginButton() {
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
