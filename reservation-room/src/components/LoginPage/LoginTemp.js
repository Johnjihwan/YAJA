import React, { Component } from "react";
import * as Login from "./Style";

export default class LoginTemp extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    // 이 타겟의 name : 이 타겟의 값.
    this.setState({
      [e.target.name]: e.target.value,
    });
    // 로그인에 관한 데이터는 this.state 를 쓰시면 됩니다.
    console.log(this.state);
  };
  render() {
    return (
      <Login.Section>
        <form onSubmit={this.handleSubmit}>
          <div class="Login_wrap">
            <div class="Login_container">
              <a href="null">로그인</a>
            </div>
            <div class="login_meterial">
              <input
                type="email"
                placeholder="이메일"
                value={this.state.name}
                onChange={this.handleChange}
                name="email"
              ></input>{" "}
              <br />
              <input
                type="password"
                placeholder="비밀번호"
                value={this.state.phone}
                onChange={this.handleChange}
                name="password"
              ></input>
            </div>
            <button type="submit" class="btn">
              로그인
            </button>
            <div class="more">
              <a href="null">아직 계정이 없으신가요?</a>
            </div>
          </div>
        </form>
      </Login.Section>
    );
  }
}
