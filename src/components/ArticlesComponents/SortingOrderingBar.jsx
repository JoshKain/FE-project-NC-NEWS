import React, { Component } from "react";
import "./ArticlesList.css";
export default class SortingOrderingBar extends Component {
  state = {
    sortBy: ["Date-Created", "Number-Of-Comments", "Votes"],
    selectSort: "created_at",
    orderByArr: ["Order", "Ascending", "Descending"],
    orderBy: "Order"
  };

  storeUserSort = event => {
    const { value } = event.target;
    this.setState({ selectSort: value });
  };
  storeUserOrder = event => {
    const { value } = event.target;
    this.setState({ orderBy: value });
  };
  render() {
    const { sortBy, selectSort } = this.state;
    const { orderByArr, orderBy } = this.state;
    return (
      <div className="sort-bar">
        <div>
          Sort Articles By:
          <select onChange={this.storeUserSort} value={selectSort}>
            {sortBy.map(sort => {
              return <option key={sort}>{sort}</option>;
            })}
          </select>
        </div>
        <div className="order">
          {" "}
          Order Articles:
          <select onChange={this.storeUserOrder} value={orderBy}>
            {orderByArr.map(order => {
              return <option key={order}>{order}</option>;
            })}
          </select>
        </div>

        <button className="sort-button">Sort</button>
      </div>
    );
  }
}
