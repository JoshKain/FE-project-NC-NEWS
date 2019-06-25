import React, { Component } from "react";
import { Link } from "@reach/router";
import moment from "moment";
moment().format();

export default class ArticleCards extends Component {
  render() {
    const {
      article_id,
      title,
      author,
      created_at,
      topic,
      votes
    } = this.props.article;
    return (
      <div>
        <Link key={article_id} to={`/articles/${article_id}`}>
          <h4>{title}</h4>
          <p>
            Posted by: {author} {moment(created_at).fromNow()}{" "}
          </p>
          <p> Topic :{topic}</p>
          <p> Votes :{votes}</p>
        </Link>
      </div>
    );
  }
}
