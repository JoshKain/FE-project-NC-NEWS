import React from "react";
import { Link } from "@reach/router";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

moment().format();

export default function ArticleCard(props) {
  const {
    article_id,
    title,
    author,
    created_at,
    topic,
    votes,
    comment_count
  } = props.article;
  return (
    <div>
      <CardActionArea>
        <Link key={article_id} to={`/articles/${article_id}`}>
          <div className="each-article-container">
            <h4>{title}</h4>
            <p> Topic :{topic}</p>
            <div className="article-card-bottom">
              <Typography>
                Posted by: {author} {moment(created_at).fromNow()}{" "}
              </Typography>
              <p> Votes :{votes}</p>
              <p>Comment Count: {comment_count}</p>
            </div>
          </div>
        </Link>
      </CardActionArea>
    </div>
  );
}
