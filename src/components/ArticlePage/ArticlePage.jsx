import React, { Component } from "react";
import * as api from "../api";
import "./ArticlePage.css";
import moment from "moment";
import CommentsList from "../CommentList/CommentsList";

moment().format();

export default class ArticlePage extends Component {
  state = { article: [] };
  render() {
    const { title, author, votes, created_at, body } = this.state.article;
    return (
      this.state.article && (
        <div className="single-article-container">
          <ul id="container">
            <h3 id="article-title">{title}</h3>
            <p>
              Posted by: {author} {moment(created_at).fromNow()}{" "}
            </p>
            <p>{body}</p>
            <p> Votes: {votes}</p>
          </ul>
          <div>
            <CommentsList id={this.props.article_id} />
          </div>
        </div>
      )
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({ article });
    });
  }
}
