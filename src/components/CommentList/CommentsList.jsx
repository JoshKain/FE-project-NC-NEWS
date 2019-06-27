import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import PostCommentComponent from "./PostCommentComponent";

export default class CommentsList extends Component {
  state = { comments: [] };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <h3>Comments</h3>
        <PostCommentComponent comments={this.state.comments} />
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
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
