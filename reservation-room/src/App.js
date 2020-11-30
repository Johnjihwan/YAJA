import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "../src/components/MainPage/MainPage";
import BackPage from "../src/components/Background/Background";
import Template from "../src/components/Templates/JoinLoginTemp";
import Login from "./components/LoginPage/LoginTemp";
import LoginPage from "./components/Login/Login";
import LoginEx from "./components/Templates/LoginEx";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="/back" component={ BackPage } />
      <Route exact path="/temp" component={ Template } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/loginpage" component={ LoginPage } />
      <Route exact path="/loginex" component={ LoginEx } />
    </Router>
  );
};

export default App;
