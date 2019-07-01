import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "../ArticlesComponents/ArticleCard";
import { Button } from "@material-ui/core";
import Error from "../ErrorComponent/Error";

export default class UserPage extends Component {
  state = {
    articles: [],
    topics: [],
    title: "",
    err: null,
    body: "",
    topic: "coding",
    moreLetters: false
  };
  handleTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleBody = event => {
    this.setState({ body: event.target.value });
  };
  handleTopic = event => {
    this.setState({ topic: event.target.value });
  };
  addArticle = article => {
    const { articles } = this.state;
    const articlesArr = [...articles];
    this.setState({ articles: [article, ...articlesArr] });
  };

  render() {
    const { username, name, avatar_url } = this.props.username;
    const { articles, moreLetters, err, topics } = this.state;
    if (err) {
      return <Error err={err} />;
    }

    return (
      <div className="each-user">
        <h1>{name}</h1>
        <img
          src={avatar_url}
          alt={username}
          style={{ width: 200, height: 200 }}
        />
        <form>
          <label>
            Add An Article:
            <input
              type="text"
              name="Title...."
              value={this.state.title}
              onChange={this.handleTitle}
              placeholder="Title"
            />{" "}
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleBody}
              placeholder="Body...."
            />{" "}
            <select onChange={this.handleTopic}>
              {topics.map(topic => {
                return <option key={topic.slug}>{topic.slug}</option>;
              })}
            </select>
          </label>
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Submit NewArticle
          </Button>
          {moreLetters && (
            <p className="CommentTag">
              Title or Body Space Needs Be Filled in Please
            </p>
          )}
        </form>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    const { username } = this.props.username;
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
    api.getArticlesByUser({ username }).then(articles => {
      this.setState({ articles });
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const { body, title, topic } = this.state;
    const { username } = this.props.username;

    if (body.length > 1 || title.length > 1) {
      api.postArticle({ username, body, title, topic }).then(article => {
        this.addArticle(article);
        this.setState({ moreLetters: false, body: "" });
        this.setState({ title: "" });
        this.setState({ topic: "" });
      });
    } else {
      this.setState({ moreLetters: true });
      this.setState({ body: "" });
      this.setState({ title: "" });
      this.setState({ topic: "" });
    }
  };
}
