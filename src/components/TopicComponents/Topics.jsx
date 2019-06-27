import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import "./Topic.css";

export default class NavBarTopics extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="topic-container">
        <h1>Topics</h1>
        {topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <div className="each-topic-container">
                <h2>{topic.slug}</h2>
                <p>{topic.description}</p>
              </div>
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
