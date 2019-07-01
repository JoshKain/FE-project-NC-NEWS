import React, { Component } from "react";
import * as api from "../api";

export default class DeleteArticle extends Component {
  render() {
    const { author, article_id } = this.props;
    return (
      <div>
        {author === this.props.username && (
          <button
            id="delete-button"
            onClick={this.handleClick}
            value={article_id}
          >
            Delete Article
          </button>
        )}
      </div>
    );
  }

  handleClick = event => {
    const { value } = event.target;
    const { deleteArticle } = this.props;
    api.deleteArticle({ value }).then(article => {
      deleteArticle({ value });
    });
  };
}
