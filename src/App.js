import React from "react";
import "./App.css";
import Header from "./components/HeaderComponents/Header";
import Topics from "./components/TopicComponents/Topics";
import ArticlesList from "./components/ArticlesComponents/ArticlesList";
import { Router } from "@reach/router";
import SortArticles from "./components/ArticlesComponents/SortArticles";
import OrderArticles from "./components/ArticlesComponents/OrderArticles";
import NavBar from "./components/HeaderComponents/NavBar";
import ArticlesByTopic from "./components/TopicComponents/ArticlesByTopic";

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
          <OrderArticles path="/" />
        </Router>
        <Router>
          <SortArticles path="/" />
        </Router>
        <Router>
          <ArticlesList path="/" />
        </Router>
      </header>
    </div>
  );
}

export default App;
