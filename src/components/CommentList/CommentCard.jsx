import React, { Component } from "react";
import moment from "moment";
import VoterComponent from "../ArticlesComponents/VoterComponent";
moment().format();

export default class CommentCard extends Component {
  state = { url: "/comments/:comment_id" };
  render() {
    const { body, comment_id, author, created_at, votes } = this.props.comment;
    return (
      <div key={comment_id}>
        <p>{body}</p>
        <p>
          Posted by: {author} / {moment(created_at).fromNow()}{" "}
        </p>
        <p>Votes:{votes}</p>
        <VoterComponent
          url={this.state.url}
          comment_id={comment_id}
          votes={votes}
        />
      </div>
    );
  }
}
