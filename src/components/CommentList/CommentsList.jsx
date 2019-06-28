import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import Error from "../ErrorComponent/Error";
import PostCommentComponent from "../CommentList/PostCommentComponent";

export default class CommentsList extends Component {
  state = { comments: [], err: null, isLoading: false, submit: false };

  AddComment = ({ comment }) => {
    const { comments } = this.state;
    const commentArr = [...comments];
    this.setState({ comments: [comment, ...commentArr] });
  };
  deleteComment = ({ value }) => {
    const { comments } = this.state;
    const id = Number(value);
    const newComment = comments.filter(
      eachComment => eachComment.comment_id !== id
    );

    this.setState({
      comments: newComment
    });
  };
  render() {
    const { comments, err, isLoading } = this.state;
    const { id } = this.props;
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
      <div>
        <h3>Comments</h3>
        <PostCommentComponent
          article_id={id}
          username={this.props.username}
          AddComment={this.AddComment}
        />
        {comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              username={this.props.username}
              deleteComment={this.deleteComment}
            />
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    const { id } = this.props;
    api
      .getCommentsForArticle(id)
      .then(comments => {
        this.setState({ comments });
        this.setState({ isLoading: true });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }
}
