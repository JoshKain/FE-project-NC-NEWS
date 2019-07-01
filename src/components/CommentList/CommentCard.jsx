import React from "react";
import moment from "moment";
import VoterComponent from "../ArticlesComponents/VoterComponent";
import "./Comment.css";
import DeleteButton from "./DeleteButton";
moment().format();

export default function CommentCard(props) {
  const url = "/comments/:comment_id";
  const { body, comment_id, author, created_at, votes } = props.comment;
  return (
    <div key={comment_id} className="comment-border">
      <p>{body}</p>
      <p>
        Posted by: {author} / {moment(created_at).fromNow()}{" "}
      </p>
      <p>Votes:{votes}</p>
      <VoterComponent url={url} comment_id={comment_id} votes={votes} />
      <div className="bottom-row">
        <DeleteButton
          comment_id={comment_id}
          author={author}
          username={props.username}
          deleteComment={props.deleteComment}
        />
      </div>
    </div>
  );
}
