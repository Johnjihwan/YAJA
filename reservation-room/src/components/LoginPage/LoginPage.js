import React, { Component } from "react";
import * as Login from "./Style";

export default class LoginPage extends Component {
  render() {
    return (
      <Login.Section>
        <div class="Login_wrap">
          <div class="Login_container">
              <a href="#">로그인</a>
          </div>
          <div class="login_meterial">
            <input type="email" placeholder="이메일"></input> <br/>
            <input type="password" placeholder="비밀번호"></input>
          </div>
          <button class="btn">로그인</button>
          <div class="more">
            <a href="#">아직 계정이 없으신가요?</a>
          </div>
        </div>
      </Login.Section>
    );
  }
}
