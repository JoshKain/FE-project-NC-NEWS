import React, { Component } from "react";
import * as api from "../api";
import SortArticles from "../ArticlesComponents/SortArticles";
import OrderArticles from "../ArticlesComponents/OrderArticles";
import ArticleCards from "../ArticlesComponents/ArticleCards";

export default class ArticlesByTopic extends Component {
  state = { articles: [] };
  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div>
        <SortArticles />
        <OrderArticles />
        <h1>{`${topic} articles`}</h1>
        {articles.map(article => {
          return ArticleCards(article);
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
