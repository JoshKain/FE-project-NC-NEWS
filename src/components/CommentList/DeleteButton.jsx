import React, { Component } from "react";
import * as api from "../api";
import "./Comment.css";

export default class DeleteButton extends Component {
  render() {
    const { author, comment_id } = this.props;
    return (
      <div>
        {author === this.props.username && (
          <button
            id="delete-button"
            onClick={this.handleClick}
            value={comment_id}
          >
            Delete Comment
          </button>
        )}
      </div>
    );
  }
  handleClick = event => {
    const { value } = event.target;
    const { deleteComment } = this.props;
    api.deleteComment({ value }).then(comment => {
      deleteComment({ value });
    });
  };
}
