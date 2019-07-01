import React, { Component } from "react";
import "./ArticlesList.css";
import { Button } from "@material-ui/core";
export default class SortingOrderingBar extends Component {
  state = {
    sortByArr: ["Sort By", "created_at", "comment_count", "votes"],
    sortBy: null,
    orderByArr: ["Order By", "asc", "desc"],
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
        <div className="sort-drop">
          <div className="sort-dropContent">
            Sort Articles By:
            <select onChange={this.storeUserSort}>
              {sortByArr.map(sort => {
                return (
                  <option className="sort-options" key={sort}>
                    {sort}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="sort-drop">
          <div className="sort-dropContent">
            {" "}
            Order Articles:
            <select onChange={this.storeUserOrder}>
              {orderByArr.map(order => {
                return (
                  <option className="sort-options" key={order}>
                    {order}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <Button
          variant="contained"
          color="primary"
          className="sort-button"
          onClick={e => this.props.handleSort(orderBy, sortBy)}
        >
          Sort
        </Button>
      </div>
    );
  }
}
