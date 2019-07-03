import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Error from "../ErrorComponent/Error";
import * as api from "../api";
import ArticleCard from "../ArticlesComponents/ArticleCard";

export default class ArticleError extends Component {
  state = {
    articles: [],
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
    const { moreLetters, err, articles } = this.state;
    const { topic } = this.props;
    if (err) {
      return <Error err={err} />;
    }

    return (
      <div>
        <h1>{`${topic} articles`}</h1>
        <form>
          <label>
            Please Add An Article:
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
          </label>
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Submit New Article
          </Button>
          {moreLetters && (
            <p className="CommentTag">
              Title or Body Space Needs Be Filled in Please
            </p>
          )}
        </form>
        {articles.length > 0 &&
          articles.map(article => {
            console.log(article);
            return <ArticleCard key={article.article_id} article={article} />;
          })}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { body, title } = this.state;
    const { username, topic } = this.props;

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
