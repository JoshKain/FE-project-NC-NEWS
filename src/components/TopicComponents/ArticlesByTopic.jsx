import React, { Component } from "react";
import * as api from "../api";
import Error from "../ErrorComponent/Error";

import ArticleCards from "../ArticlesComponents/ArticleCards";
import SortingOrderingBar from "../ArticlesComponents/SortingOrderingBar";

export default class ArticlesByTopic extends Component {
  state = { articles: [], order: null, sort: null, err: null };
  handleSort = (orderBy, sortBy) => {
    this.setState({ order: orderBy, sort: sortBy });
  };
  render() {
    const { articles, err } = this.state;
    const { topic } = this.props;
    if (err) {
      return <Error err={err} />;
    }
    return (
      <div>
        <SortingOrderingBar handleSort={this.handleSort} />
        <h1>{`${topic} articles`}</h1>
        {articles.map(article => {
          return <ArticleCards article={article} key={article.article_id} />;
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
          this.setState({ articles });
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
