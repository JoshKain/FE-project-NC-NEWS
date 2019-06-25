import React from "react";
import "./App.css";
import Header from "./components/HeaderComponents/Header";
import Topics from "./components/TopicComponents/Topics";
import ArticlesList from "./components/ArticlesPage/ArticlesComponents/ArticlesList";
import { Router } from "@reach/router";
import NavBar from "./components/HeaderComponents/NavBar";
import ArticlesByTopic from "./components/TopicComponents/ArticlesByTopic";
import ArticleCard from "./components/ArticlesPage/ArticlePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header className="header" path="/" />
        <NavBar />
        <Router>
          <Topics path="/topics" />
        </Router>
        <Router>
          <ArticlesByTopic path="/topics/:topic" />
        </Router>
        <Router>
          <ArticleCard path="/articles/:article_id" />
        </Router>
        <Router>
          <ArticlesList path="/" />
        </Router>
      </header>
    </div>
  );
}

export default App;
