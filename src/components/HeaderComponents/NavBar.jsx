import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </div>
  );
}
