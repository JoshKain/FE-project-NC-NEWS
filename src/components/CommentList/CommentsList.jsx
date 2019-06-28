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
  render() {
    const { comments, err, isLoading } = this.state;
    const { id } = this.props;
    console.log(comments);
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
