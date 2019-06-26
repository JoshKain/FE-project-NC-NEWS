import React, { Component } from "react";
import * as api from "../api";

import ArticleCards from "../ArticlesComponents/ArticleCards";
import SortingOrderingBar from "../ArticlesComponents/SortingOrderingBar";

export default class ArticlesByTopic extends Component {
  state = { articles: [], order: null, sort: null };
  handleSort = (orderBy, sortBy) => {
    this.setState({ order: orderBy, sort: sortBy });
  };
  render() {
    const { articles } = this.state;
    const { topic } = this.props;
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
      console.log({ topic });
      api.getArticles({ topic }).then(articles => {
        this.setState({ articles });
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
