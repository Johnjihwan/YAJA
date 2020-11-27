import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "../src/components/MainPage/MainPage";
import BackPage from "../src/components/Background/Background";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="/back" component={ BackPage } />
    </Router>
  );
};

export default App;
