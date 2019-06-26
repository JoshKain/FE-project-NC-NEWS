import React from "react";
import "./App.css";
import Header from "./components/HeaderComponents/Header";
import Topics from "./components/TopicComponents/Topics";
import ArticlesList from "./components/ArticlesComponents/ArticlesList";
import { Router } from "@reach/router";
import NavBar from "./components/HeaderComponents/NavBar";
import ArticlesByTopic from "./components/TopicComponents/ArticlesByTopic";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-container">
          <LoginPage path="/login" />
          <Header className="header" path="/" />
        </div>
        <NavBar />
        <Router>
          <ArticlesList path="/" />
          <Topics path="/topics" />
          <ArticlesByTopic path="/topics/:topic" />
          <ArticlePage path="/articles/:article_id" />
        </Router>
      </header>
    </div>
  );
}

export default App;
