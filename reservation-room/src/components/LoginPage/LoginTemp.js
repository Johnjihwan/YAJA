import React, { Component } from "react";
import * as Login from "./Style";

export default class LoginTemp extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
        <Login.Section>
          <div class="Login_wrap">
            <div class="Login_container">
                <a href="null">로그인</a>
            </div>
            <div class="login_meterial">
              <input type="email" placeholder="이메일" value={this.state.name} onChange={this.handleChange} name="email"></input> <br/>
              <input type="password" placeholder="비밀번호" value={this.state.phone} onChange={this.handleChange} name="password"></input>
            </div>
            <button class="btn">로그인</button>
            <div class="more">
              <a href="null">아직 계정이 없으신가요?</a>
            </div>
          </div>
          <div>{this.state.name} {this.state.phone}</div>
        </Login.Section>
    );
  }
}