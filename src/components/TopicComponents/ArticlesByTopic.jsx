import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

export default class ArticlesByTopic extends Component {
  state = { articles: [] };
  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div>
        <h1>{`${topic} articles`}</h1>
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
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  }
}
