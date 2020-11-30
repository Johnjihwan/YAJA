import React, { Component } from "react";
import * as Join from "./JoinStyle";

export default class JoinTemp extends Component{
    state = {
        grade: "",
        class: "",
        number: "",
        name: "",
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
          <Join.Section>
            <form onSubmit={this.handleSubmit}>
              <div class="join_wrap">
                <div class="join_container">
                  <a href="null">회원가입</a>
                </div>
                {/* <div class="join_selectbox">
                    <select type="grade" name="grade" value={this.state.grade}>
                        <option value="1">1학년</option>
                        <option value="2">2학년</option>
                        <option value="3">3학년</option>
                    </select>
                    <select type="class" name="class" value={this.state.class}>
                        <option value="1">1반</option>
                        <option value="2">2반</option>
                        <option value="3">3반</option>
                        <option value="4">4반</option>
                    </select>
                    <input type="number" value={this.state.number} name="number"></input>
                </div> */}
                <div class="join_meterial">
                    <input
                        type="name"
                        placeholder="성명"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                    ></input>{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="이메일"
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                  ></input>{" "}
                  <br />
                  <input
                    type="password"
                    placeholder="비밀번호"
                    value={this.state.password}
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
          </Join.Section>
        );
      }
}