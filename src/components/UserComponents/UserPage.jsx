import React, { Component } from "react";
import * as api from "../api";
import ArticleCards from "../ArticlesComponents/ArticleCards";

export default class UserPage extends Component {
  state = { articles: [] };
  render() {
    const { username, name, avatar_url } = this.props.username;
    const { articles } = this.state;
    return (
      <div className="each-user">
        <h1>{name}</h1>
        <img
          src={avatar_url}
          alt={username}
          style={{ width: 200, height: 200 }}
        />
        {articles.map(article => {
          return <ArticleCards key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    const { username } = this.props.username;
    api.getArticlesByUser({ username }).then(articles => {
      this.setState({ articles });
    });
  }
}
