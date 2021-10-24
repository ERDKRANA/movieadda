import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Movieadda/Home";
import Landing from "./Movieadda/Landing";

function App() {
  return (
    <Router>
      <div className="App">
      
        <Route exact path="/" component={Home}/ >
        <Route exact path="/dashboard" component={Landing}/ >

      </div>
    </Router>
  );
}
export default App;
