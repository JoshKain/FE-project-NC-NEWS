import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import Error from "../ErrorComponent/Error";
import "./../ArticlePage/ArticlePage.css";
import PostCommentComponent from "../CommentList/PostCommentComponent";

export default class CommentsList extends Component {
  state = { comments: [], err: null, isLoading: false };

  AddComment = ({ comment }) => {
    const { comments } = this.state;
    if (comments.length > 0) {
      const commentArr = [...comments];
      this.setState({ comments: [comment, ...commentArr] });
    } else this.setState({ comments: [comment] });
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
        <h3 className="comments">Comments</h3>
        <div>
          <PostCommentComponent
            article_id={id}
            username={this.props.username}
            AddComment={this.AddComment}
          />
        </div>
        {comments.length > 0 &&
          comments.map(comment => {
            return (
              <div className="each-comment">
                <CommentCard
                  key={id}
                  comment={comment}
                  username={this.props.username}
                  deleteComment={this.deleteComment}
                />
              </div>
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
