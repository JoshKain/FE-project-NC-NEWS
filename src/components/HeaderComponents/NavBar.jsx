import React from "react";
import { Link } from "@reach/router";
import "./Header.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>

        <Link to="/topics">Topics</Link>
      </nav>
    </div>
  );
}
