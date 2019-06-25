import React, { Component } from "react";
import moment from "moment";
moment().format();

export default class CommentCard extends Component {
  render() {
    const { body, comment_id, author, created_at, votes } = this.props.comment;
    return (
      <div key={comment_id}>
        <p>{body}</p>
        <p>
          Posted by: {author} / {moment(created_at).fromNow()}{" "}
        </p>
        <p>Votes:{votes}</p>
      </div>
    );
  }
}
