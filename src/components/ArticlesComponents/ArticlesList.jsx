import React, { Component } from "react";
import * as api from "../api";
import ArticleCards from "./ArticleCards";
import "./ArticlesList.css";
import SortingOrderingBar from "./SortingOrderingBar";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    order: "",
    sort: ""
  };

  handleSubmit = () => {};
  render() {
    const { articles, order, sort } = this.state;

    return (
      <div>
        <SortingOrderingBar
          handleSubmit={this.handleSubmit}
          order={order}
          sort={sort}
        />
        <div>
          {articles.map(article => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  }
}
