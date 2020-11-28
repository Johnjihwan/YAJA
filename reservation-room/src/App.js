import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "../src/components/MainPage/MainPage";
import BackPage from "../src/components/Background/Background";
import Template from "../src/components/Templates/JoinLoginTemp";
import Login from "../src/components/LoginPage/LoginPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="/back" component={ BackPage } />
      <Route exact path="/temp" component={ Template } />
      <Route exact path="/login" component={ Login } />
    </Router>
  );
};

export default App;
