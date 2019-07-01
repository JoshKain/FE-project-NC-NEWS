import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import "./ArticlesList.css";
import SortingOrderingBar from "./SortingOrderingBar";
import Error from "../ErrorComponent/Error";
import { Button } from "@material-ui/core";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    order: null,
    sort: null,
    err: null,
    isLoading: false,
    page: 1
  };

  changePage = direction => {
    this.setState(prevState => {
      return { page: prevState.page + direction };
    });
  };
  handleSort = (orderBy, sortBy) => {
    this.setState({ order: orderBy, sort: sortBy });
  };
  render() {
    const { articles, err, isLoading, page } = this.state;

    if (err) {
      return <Error err={err} />;
    }
    if (isLoading === false) {
      return (
        <div className="loader">
          <div className="outer" />
          <div className="middle" />
          <div className="inner" />
        </div>
      );
    }
    return (
      <div>
        <SortingOrderingBar handleSort={this.handleSort} />
        <div className="slide-fwd-center">
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </div>
        <div className="pagnation">
          <div className="Next">
            <Button
              onClick={() => this.changePage(1)}
              disabled={articles.length < 10}
            >
              Next
            </Button>
          </div>
          <div className="Prev">
            <Button onClick={() => this.changePage(-1)} disabled={page <= 1}>
              Prev
            </Button>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    api
      .getArticles({})
      .then(articles => {
        this.setState({ articles });
        this.setState({ isLoading: true });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { order, sort, page } = this.state;
    const pageChange = prevState.page !== this.state.page;
    if (
      this.state.sort !== prevState.sort ||
      this.state.order !== prevState.order ||
      pageChange
    )
      api.getArticles({ sort, order, page }).then(articles => {
        this.setState({ articles });
      });
  }
}
