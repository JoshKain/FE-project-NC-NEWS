import React, { Component } from "react";

export default class SortArticles extends Component {
  state = { sortBy: ["Date-Created", "Number-Of-Comments", "Votes"] };
  render() {
    const { sortBy } = this.state;
    return (
      <div>
        Sort Articles By:
        <select>
          {sortBy.map(sort => {
            return <option>{sort}</option>;
          })}
        </select>
      </div>
    );
  }
}
