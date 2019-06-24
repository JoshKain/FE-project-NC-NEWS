import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";

export default class ArticlesList extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;

    return (
      <div>
        {articles.map(article => (
          <Link key={article.article_id} to={`/article/${article.article_id}`}>
            <h4>{article.title}</h4>
            <p>Author: {article.author}</p>
            <p>{article.created_at}</p>
            <p>{article.votes}</p>
          </Link>
        ))}
      </div>
    );
  }
  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  }
}
