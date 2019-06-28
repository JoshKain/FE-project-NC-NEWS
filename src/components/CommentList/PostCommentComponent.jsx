import React, { Component } from "react";
import * as api from "../api";

import "./Comment.css";
export default class PostCommentComponent extends Component {
  state = { body: "", moreLetters: false };
  render() {
    const { moreLetters } = this.state;
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
          {moreLetters && (
            <p className="CommentTag">
              Comment Space Needs Be Filled in Please
            </p>
          )}
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
    console.log(body);
    const { username, article_id, AddComment } = this.props;
    if (body.length > 1) {
      api.postComment({ article_id, username, body }).then(comment => {
        AddComment({ comment });
        this.setState({ moreLetters: false });
        this.setState({ body: "" });
      });
    } else {
      this.setState({ moreLetters: true });
      this.setState({ body: "" });
    }
  };
}
