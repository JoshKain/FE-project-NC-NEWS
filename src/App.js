import React from "react";
import "./App.css";
import Header from "./components/Header";
import Topics from "./components/Topics";
import ArticlesList from "./components/ArticlesList";
import { Router } from "@reach/router";
import SortArticles from "./components/SortArticles";
import OrderArticles from "./components/OrderArticles";
import NavBar from "./components/NavBar";

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
