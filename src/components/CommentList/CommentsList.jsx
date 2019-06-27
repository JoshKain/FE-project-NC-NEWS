import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";

export default class CommentsList extends Component {
  state = { comments: [], submit: false };
  render() {
    const { comments } = this.state;

    return (
      <div>
        <h3>Comments</h3>
        {comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              username={this.props.username}
            />
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    const { id } = this.props;
    api.getCommentsForArticle(id).then(comments => {
      this.setState({ comments });
    });
  }
}
