import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "../src/components/MainPage/MainPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={ MainPage } />
    </Router>
  );
};

export default App;
