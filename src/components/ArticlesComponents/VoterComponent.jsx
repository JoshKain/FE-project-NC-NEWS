import React, { Component } from "react";
import "./ArticleVoter.css";
import * as api from "../api";
import Button from "@material-ui/core/Button";

export default class VoterComponent extends Component {
  state = {
    LikeChange: 0
  };
  render() {
    const { LikeChange } = this.state;
    const { votes } = this.props;
    return (
      <div className="voter-buttons">
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.handleLike(1)}
          disabled={LikeChange > 0}
        >
          Like
        </Button>
        <p> Likes: {votes + LikeChange}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.handleLike(-1)}
          disabled={LikeChange < 0}
        >
          Dislike
        </Button>
      </div>
    );
  }

  handleLike = increment => {
    const { article_id, comment_id } = this.props;
    this.setState(({ LikeChange }) => ({ LikeChange: LikeChange + increment }));
    if (comment_id && !article_id) {
      api.patchCommentVotes({ comment_id, increment }).catch(err => {
        this.setState(({ LikeChange }) => ({
          LikeChange: LikeChange + increment
        }));
      });
    } else
      api.patchArticleVotes({ article_id, increment }).catch(err => {
        this.setState(({ LikeChange }) => ({
          LikeChange: LikeChange + increment
        }));
      });
  };
}
