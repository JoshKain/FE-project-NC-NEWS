import React, { Component } from "react";
import "./ArticlesList.css";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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
        <div className="sort-order-bar">
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

          <div>
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
        </div>
        <div className="sort-button">
          <StyledButton
            variant="contained"
            color="primary"
            size="large"
            onClick={e => this.props.handleSort(orderBy, sortBy)}
          >
            Sort
          </StyledButton>
        </div>
      </div>
    );
  }
}

const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 20,
    border: 0,
    color: "blue",
    height: 40,
    padding: "0 30px",
    boxShadow: styledBy("color", {
      blue: "0 3px 5px 2px rgba(33, 203, 243, .3)"
    })
  }
})(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));
