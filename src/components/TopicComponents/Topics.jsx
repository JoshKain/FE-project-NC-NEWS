import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";

export default class NavBarTopics extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div>
        {topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <h2>{topic.slug}</h2>
              <p>{topic.description}</p>
            </Link>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    if (this.state.topics) {
      api.getTopics().then(topics => {
        this.setState({ topics });
      });
    }
  }
}
