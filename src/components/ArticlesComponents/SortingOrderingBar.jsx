import React, { Component } from "react";
import "./ArticlesList.css";
export default class SortingOrderingBar extends Component {
  state = {
    sortByArr: ["sort_by", "created_at", "comment_count", "votes"],
    sortBy: null,
    orderByArr: ["Order_By", "asc", "desc"],
    orderBy: null
  };

  storeUserSort = event => {
    const { value } = event.target;
    this.setState({ sortBy: value });
  };
  storeUserOrder = event => {
    const { value } = event.target;
    this.setState({ orderBy: value });
  };

  render() {
    const { sortByArr, sortBy } = this.state;
    const { orderByArr, orderBy } = this.state;
    return (
      <div className="sort-bar">
        <div>
          Sort Articles By:
          <select onChange={this.storeUserSort}>
            {sortByArr.map(sort => {
              return <option key={sort}>{sort}</option>;
            })}
          </select>
        </div>
        <div className="order">
          {" "}
          Order Articles:
          <select onChange={this.storeUserOrder}>
            {orderByArr.map(order => {
              return <option key={order}>{order}</option>;
            })}
          </select>
        </div>

        <button
          className="sort-button"
          onClick={e => this.props.handleSort(orderBy, sortBy)}
        >
          Sort
        </button>
      </div>
    );
  }
}
