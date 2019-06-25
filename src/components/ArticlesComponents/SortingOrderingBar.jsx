import React, { Component } from "react";
import SortArticles from "./SortArticles";
import OrderArticles from "./OrderArticles";

export default class SortingOrderingBar extends Component {
  render() {
    return (
      <div className="sorting-articles">
        <SortArticles className="sort" />
        <OrderArticles className="order" />
        <button>Sort</button>
      </div>
    );
  }
}
