import React from "react";
import { Link } from "@reach/router";
import moment from "moment";
moment().format();

export default function ArticleCards(article) {
  return (
    <Link key={article.article_id} to={`/articles/${article.article_id}`}>
      <h4>{article.title}</h4>
      <p>
        Posted by: {article.author} / {moment(article.created_at).fromNow()}{" "}
      </p>
      <p> Topic :{article.topic}</p>
      <p> Votes :{article.votes}</p>
    </Link>
  );
}
