import React, { Component } from "react";
import { Link } from "@reach/router";

export default class NavBarTopics extends Component {
  state = {
    topics: ["coding", "world", "love", "war"]
  };
  render() {
    const { topics } = this.state;
    return (
      <div>
        {topics.map(topic => {
          return (
            <Link key={topic} to={`/topics/${topic}`}>
              <button>{topic}</button>
            </Link>
          );
        })}
      </div>
    );
  }
}
