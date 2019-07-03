import React, { Component } from "react";
import * as api from "../api";
import Error from "../ErrorComponent/Error";
import ArticleCard from "../ArticlesComponents/ArticleCard";
import SortingOrderingBar from "../ArticlesComponents/SortingOrderingBar";
// import UserPage from "../UserComponents/UserPage";

export default class ArticlesByTopic extends Component {
  state = {
    articles: [],
    order: null,
    sort: null,
    err: null,
    isLoading: false
  };

  handleSort = (orderBy, sortBy) => {
    this.setState({ order: orderBy, sort: sortBy });
  };
  render() {
    const { articles, err, isLoading } = this.state;
    const { topic } = this.props;

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
        <h1>{`${topic} articles`}</h1>
        {articles &&
          articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
      </div>
    );
  }

  componentDidMount() {
    if (this.props.topic) {
      const { topic } = this.props;

      api
        .getArticles({ topic })
        .then(articles => {
          this.setState({ articles, isLoading: true });
        })
        .catch(({ response }) => {
          const errStatus = response.status;
          const errMessage = response.data;
          const err = { errStatus, errMessage };
          this.setState({ err });
        });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { order, sort } = this.state;
    const { topic } = this.props;
    if (
      this.state.sort !== prevState.sort ||
      this.state.order !== prevState.order
    )
      api.getArticles({ topic, sort, order }).then(articles => {
        this.setState({ articles });
      });
  }
}
