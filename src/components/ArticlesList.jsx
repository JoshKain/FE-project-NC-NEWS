import React, { Component } from "react";
import { Link } from "@reach/router";

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
            <p>{article.title}</p>
          </Link>
        ))}
      </div>
    );
  }
}
