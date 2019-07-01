import React, { Component } from "react";
import * as api from "../api";
import "./ArticlePage.css";
import moment from "moment";
import CommentsList from "../CommentList/CommentsList";
import VoterComponent from "../ArticlesComponents/VoterComponent";
import DeleteArticle from "../ArticlesComponents/DeleteArticle";

import Error from "../ErrorComponent/Error";

moment().format();

export default class ArticlePage extends Component {
  state = { article: [], isLoading: false, err: null };

  render() {
    const {
      title,
      author,
      votes,
      created_at,
      body,
      article_id
    } = this.state.article;
    const { isLoading, err } = this.state;
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
      <div className="single-article-container">
        <ul id="container">
          <div>
            <h3 id="article-title">{title}</h3>
            <p>
              Posted by: {author} {moment(created_at).fromNow()}{" "}
            </p>
          </div>
          <p>{body}</p>

          <div className="Voter">
            <VoterComponent votes={votes} article_id={article_id} />
          </div>
          <DeleteArticle
            author={author}
            article_id={article_id}
            username={this.props.username}
          />
        </ul>
        <div className="comment-container">
          <CommentsList
            id={this.props.article_id}
            username={this.props.username}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById({ article_id })
      .then(article => {
        this.setState({ article, isLoading: true });
      })
      .catch(({ response }) => {
        console.log(response);
        const errStatus = response.status;
        const errMessage = response.data;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }
}
