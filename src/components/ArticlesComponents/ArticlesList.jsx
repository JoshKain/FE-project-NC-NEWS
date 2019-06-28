import React, { Component } from "react";
import * as api from "../api";
import ArticleCards from "./ArticleCards";
import "./ArticlesList.css";
import SortingOrderingBar from "./SortingOrderingBar";
import Error from "../ErrorComponent/Error";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    order: null,
    sort: null,
    err: null
  };

  handleSort = (orderBy, sortBy) => {
    this.setState({ order: orderBy, sort: sortBy });
  };
  render() {
    const { articles, err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    return (
      <div>
        <SortingOrderingBar handleSort={this.handleSort} />
        <div className="slide-fwd-center">
          {articles.map(article => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    api
      .getArticles({})
      .then(articles => {
        this.setState({ articles });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
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
