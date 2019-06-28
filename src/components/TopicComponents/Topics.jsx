import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import "./Topic.css";
import Error from "../ErrorComponent/Error";

export default class NavBarTopics extends Component {
  state = {
    topics: [],
    err: null
  };
  render() {
    const { topics, err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
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
      api
        .getTopics()
        .then(topics => {
          this.setState({ topics });
        })
        .catch(({ response }) => {
          const errStatus = response.status;
          const errMessage = response.data;
          const err = { errStatus, errMessage };
          this.setState({ err });
        });
    }
  }
}
