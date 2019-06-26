import React from "react";
import { Link } from "@reach/router";
import "./Header.css";
import Button from "@material-ui/core/Button";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="navbar-child">
          <Link to="/">
            <Button variant="contained" color="primary">
              {" "}
              Home
            </Button>
          </Link>
          <Link to="/topics">
            <Button variant="contained" color="primary">
              {" "}
              Topics
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
