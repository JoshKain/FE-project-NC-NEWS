import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import Error from "../ErrorComponent/Error";

export default class CommentsList extends Component {
  state = { comments: [], commentVotes: null, err: null };

  render() {
    const { comments, err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
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
    api
      .getCommentsForArticle(id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }
  componentDidUpdate(prevProps, prevState) {}
}
