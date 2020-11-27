import React, { Component } from "react";
import * as Main from "./Style";
import Logo from "../images/yajaLogo.png";
import Section from "../Background/Background";

class MainPage extends Component {
  render() {
    return (
      <Main.Page>
        <div class="logo_wrap">
          <img src={ Logo } alt="로고"></img>
        </div>
        <div class="btn_wrap">
          <button>조회하기</button>
          <button>신청하기</button>
          <button>로그인</button>
        </div>
        <Section></Section>
      </Main.Page>
    );
  }
}
export default MainPage;
