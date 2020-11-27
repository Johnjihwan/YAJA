import React, { Component } from "react";
import * as Main from "./Style";
import Logo from "../images/yajaLogo.png";
class MainPage extends Component {
  render() {
    return (
      <Main.Header>
        <div class="logo_wrap">
          <img src={ Logo } alt="로고"></img>
        </div>
      </Main.Header>
    );
  }
}
export default MainPage;
