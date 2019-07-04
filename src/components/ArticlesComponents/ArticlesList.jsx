import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import "./ArticlesList.css";
import SortingOrderingBar from "./SortingOrderingBar";
import Error from "../ErrorComponent/Error";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    order: null,
    sort: null,
    err: null,
    isLoading: false,
    page: 1
  };

  changePage = direction => {
    this.setState(prevState => {
      return { page: prevState.page + direction };
    });
  };
  handleSort = (orderBy, sortBy) => {
    this.setState({ order: orderBy, sort: sortBy });
  };
  render() {
    const { articles, err, isLoading, page } = this.state;

    if (err) {
      return <Error err={err} />;
    }
    if (isLoading === false) {
      return (
        <div className="loader">
          <div className="outer" />
          <div className="middle" />
          <div className="inner" />
        </div>
      );
    }
    return (
      <div>
        <SortingOrderingBar handleSort={this.handleSort} />
        <div className="pagnation">
          <div className="Prev">
            <StyledButton
              onClick={() => this.changePage(-1)}
              disabled={page <= 1}
            >
              Prev
            </StyledButton>
          </div>
          <div className="Next">
            <StyledButton
              onClick={() => this.changePage(1)}
              disabled={articles.length < 10}
            >
              Next
            </StyledButton>
          </div>
        </div>
        <h3 className="article">Articles</h3>
        <div>
          {articles.map(article => {
            return (
              <ArticleCard
                className="each-article"
                key={article.article_id}
                article={article}
              />
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    api
      .getArticles({})
      .then(articles => {
        this.setState({ articles });
        this.setState({ isLoading: true });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { order, sort, page } = this.state;
    const pageChange = prevState.page !== this.state.page;
    if (
      this.state.sort !== prevState.sort ||
      this.state.order !== prevState.order ||
      pageChange
    )
      api.getArticles({ sort, order, page }).then(articles => {
        this.setState({ articles });
      });
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
