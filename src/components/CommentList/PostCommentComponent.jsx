import React, { Component } from "react";

export default class PostCommentComponent extends Component {
  state = { body: "" };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add A Comment:
            <input type="text" name="body" onChange={this.handleChange} />{" "}
          </label>
          <button>Submit Comment</button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ body: event.target.value });
  };
}
