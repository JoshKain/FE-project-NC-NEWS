import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBarTopics from "./components/NavBarTopics";
import ArticlesList from "./components/ArticlesList";
import { Router, Link } from "@reach/router";
import SortArticles from "./components/SortArticles";
import OrderArticles from "./components/OrderArticles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header path="/" />
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <SortArticles path="/" />
        <OrderArticles path="/" />
        <ArticlesList path="/" />
        <nav />
        <Router>
          <NavBarTopics path="/topics/:topic" />
        </Router>
      </header>
    </div>
  );
}

export default App;
