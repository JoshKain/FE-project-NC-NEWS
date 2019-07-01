import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import "./Topic.css";
import Error from "../ErrorComponent/Error";

export default class NavBarTopics extends Component {
  state = {
    topics: [],
    err: null,
    description: "",
    title: "",
    isLoading: false
  };
  addTopic = ({ topic }) => {
    const { topics } = this.state;
    const topicsArr = [...topics];
    this.setState({ topics: [topic, ...topicsArr] });
  };
  handleTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleDescription = event => {
    this.setState({ description: event.target.value });
  };
  render() {
    const { topics, err, isLoading } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    if (isLoading === false) {
      return (
        <div className="loader">
          <div className="outer" />
          <div className="middle" />
          <div className="inner" />
        </div>
      );
    }
    return (
      <div className="topic-container">
        <h1>Topics</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Topic:
            <input
              type="text"
              name="Title"
              value={this.state.title}
              onChange={this.handleTitle}
              placeholder="Title ...."
            />{" "}
            <input
              type="text"
              name="Description"
              value={this.state.description}
              onChange={this.handleDescription}
              placeholder="Description...."
            />{" "}
          </label>
          <button>Submit New Topic</button>
        </form>
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
          this.setState({ topics, isLoading: true });
        })
        .catch(({ response }) => {
          const errStatus = response.status;
          const errMessage = response.data;
          const err = { errStatus, errMessage };
          this.setState({ err });
        });
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;

    if (description.length > 1 && title.length > 1) {
      api.postTopic({ title, description }).then(topic => {
        this.addTopic({ topic });
        this.setState({
          moreLetters: false,
          title: "",
          description: "",
          isLoading: true
        });
      });
    } else {
      this.setState({
        moreLetters: true,
        title: "",
        description: "",
        isLoading: true
      });
    }
  };
}
