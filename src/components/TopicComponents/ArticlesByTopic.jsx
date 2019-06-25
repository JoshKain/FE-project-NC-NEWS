import React, { Component } from "react";
import * as api from "../api";

import ArticleCards from "../ArticlesComponents/ArticleCards";
import SortingOrderingBar from "../ArticlesComponents/SortingOrderingBar";

export default class ArticlesByTopic extends Component {
  state = { articles: [] };
  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div>
        <SortingOrderingBar />
        <h1>{`${topic} articles`}</h1>
        {articles.map(article => {
          return <ArticleCards article={article} key={article.article_id} />;
        })}
        ;
      </div>
    );
  }

  componentDidMount() {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  }
}
