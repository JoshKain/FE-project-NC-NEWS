import React from "react";
import { Link } from "@reach/router";

export default function ArticleCards(article) {
  return (
    <Link key={article.article_id} to={`/articles/${article.article_id}`}>
      <h4>{article.title}</h4>
      <p>Author: {article.author}</p>
      <p>{article.topic}</p>
      <p>{article.votes}</p>
      <p>{article.created_at}</p>
    </Link>
  );
}
