import "./App.css";
import Header from "./components/HeaderComponents/Header";
import Topics from "./components/TopicComponents/Topics";
import ArticlesList from "./components/ArticlesComponents/ArticlesList";
import { Router } from "@reach/router";
import NavBar from "./components/HeaderComponents/NavBar";
import ArticlesByTopic from "./components/TopicComponents/ArticlesByTopic";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import LoginButton from "./components/Login/LoginButton";
import LoginPage from "./components/Login/LoginPage";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    loginUser: {
      avatar_url:
        "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
      name: "Jess Jelly",
      username: "jessjelly"
    }
  };
  handleChangeUser = event => {
    this.setState({ loginUser: event });
  };

  render() {
    const { username } = this.state.loginUser;
    return (
      <div>
        <header className="App-header">
          <div className="app-container">
            <LoginButton />
            <div>
              <p> Logged In As: {username}</p>
            </div>
            <Header path="/" />
          </div>
          <NavBar />
          <Router>
            <ArticlesList path="/" />
            <Topics path="/topics" />
            <ArticlesByTopic path="/topics/:topic" />
            <ArticlePage
              path="/articles/:article_id"
              username={this.state.loginUser.username}
            />
            <LoginPage path="/login" handleChangeUser={this.handleChangeUser} />
          </Router>
        </header>
      </div>
    );
  }
}
