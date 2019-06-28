import React, { Component } from "react";
import * as api from "../api";
export default class PostCommentComponent extends Component {
  state = { body: null };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add A Comment:
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />{" "}
          </label>
          <button>Submit Comment</button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { username, article_id, AddComment } = this.props;

    api.postComment({ article_id, username, body }).then(comment => {
      AddComment({ comment });
      this.setState({ body: "" });
    });
  };
}
