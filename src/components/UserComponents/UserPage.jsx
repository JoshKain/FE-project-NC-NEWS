import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "../ArticlesComponents/ArticleCard";
import Error from "../ErrorComponent/Error";
import "./UserPage.css";

export default class UserPage extends Component {
  state = {
    articles: [],
    topics: [],
    title: "",
    err: null,
    body: "",
    topic: "coding",
    moreLetters: false,
    isLoading: false
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
    const { articles, moreLetters, err, topics, isLoading } = this.state;
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
        <div className="user">
          <h1>{name}</h1>
          <img src={avatar_url} alt={username} className="image" />
        </div>
        <h3>Add An Article:</h3>
        <div className="topics-form">
          <form>
            <div className="sort-Content">
              <div className="labels">
                Topic:
                <select onChange={this.handleTopic}>
                  {topics.map(topic => {
                    return (
                      <option className="sort-options" key={topic.slug}>
                        {topic.slug}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="labels">
                Title:
                <input
                  type="text"
                  name="Title...."
                  value={this.state.title}
                  onChange={this.handleTitle}
                  placeholder="Title"
                  className="input"
                />{" "}
              </label>
              <label>
                Body:
                <input
                  type="text"
                  name="body"
                  value={this.state.body}
                  onChange={this.handleBody}
                  placeholder="Body...."
                  className="input"
                />{" "}
              </label>
              <button className="submit-buttons" onClick={this.handleSubmit}>
                Submit New Article
              </button>
            </div>
            {moreLetters && (
              <p className="CommentTag">
                Title or Body Space Needs Be Filled in Please
              </p>
            )}
          </form>
        </div>
        {articles.length >= 1 &&
          articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
      </div>
    );
  }
  componentDidMount() {
    const { username } = this.props.username;
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: true });
    });

    api.getArticlesByUser({ username }).then(articles => {
      if (articles.length > 0) {
        this.setState({ articles });
      }
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const { body, title, topic } = this.state;
    const { username } = this.props.username;

    if (body.length > 1 || title.length > 1) {
      api.postArticle({ username, body, title, topic }).then(article => {
        this.addArticle(article);
        this.setState({ moreLetters: false, body: "", title: "" });
      });
    } else {
      this.setState({ moreLetters: true, body: "", title: "" });
    }
  };
}
