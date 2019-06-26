import React, { Component } from "react";
import "./ArticleVoter.css";
import * as api from "../api";
import Button from "@material-ui/core/Button";

export default class VoterComponent extends Component {
  state = {
    LikeChange: 0,
    DisLikeChange: 0
  };
  render() {
    const { LikeChange, DisLikeChange } = this.state;
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
          onClick={() => this.handleDislike(-1)}
          disabled={DisLikeChange < 0}
        >
          Dislike
        </Button>
        <p> Dislikes: {votes + DisLikeChange}</p>
      </div>
    );
  }

  handleLike = increment => {
    const { article_id } = this.props;
    this.setState(({ LikeChange }) => ({ LikeChange: LikeChange + increment }));
    api.patchArticleVotes({ article_id, increment }).catch(err => {
      this.setState(({ LikeChange }) => ({
        LikeChange: LikeChange + increment
      }));
    });
  };

  handleDislike = decrement => {
    const { article_id } = this.props;
    this.setState(({ DisLikeChange }) => ({
      DisLikeChange: DisLikeChange + decrement
    }));
    api.patchArticleVotes({ article_id, decrement }).catch(err => {
      this.setState(({ DisLikeChange }) => ({
        DisLikeChange: DisLikeChange + decrement
      }));
    });
  };
}
