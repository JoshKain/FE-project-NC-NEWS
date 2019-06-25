import React, { Component } from "react";

import * as api from "../api";
import ArticleCards from "./ArticleCards";
import SortArticles from "./SortArticles";
import OrderArticles from "./OrderArticles";

export default class ArticlesList extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;

    return (
      <div>
        <button />
        <SortArticles />
        <OrderArticles />
        {articles.map(article => {
          return ArticleCards(article);
        })}
      </div>
    );
  }
  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  }
}
