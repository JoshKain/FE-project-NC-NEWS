import React, { Component } from "react";
import * as api from "../api";
import ArticleCards from "./ArticleCards";
import "./ArticlesList.css";
import SortingOrderingBar from "./SortingOrderingBar";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    order: null,
    sort: null
  };

  handleSort = (orderBy, sortBy) => {
    this.setState({ order: orderBy, sort: sortBy });
  };
  render() {
    const { articles } = this.state;
    console.log(this.state);
    return (
      <div>
        <SortingOrderingBar handleSort={this.handleSort} />
        <div>
          {articles.map(article => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.getArticles({}).then(articles => {
      this.setState({ articles });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { order, sort } = this.state;
    if (
      this.state.sort !== prevState.sort ||
      this.state.order !== prevState.order
    )
      api.getArticles({ sort, order }).then(articles => {
        this.setState({ articles });
      });
  }
}
