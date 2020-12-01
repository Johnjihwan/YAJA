import React, { Component } from "react";
export default class SelectBox extends Component{
  
    constructor(props) {
        super(props);
        // 기본값을 부여합니다.
        this.state = {학년: "1", 반: "1"};
      }
      handleChange = (event) =>
        this.setState({[event.target.name]: event.target.value});
      
        // 제출버튼을 눌렀을때 console 에 value를 띄웁니다.
      handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              학년
              <select name="학년" value={this.state.value} onChange={this.handleChange}>
                <option value="1">1학년</option>
                <option value="2">2학년</option>
                <option value="3">3학년</option>
              </select>
            </label>
            <label>
              반
              <select name="반" value={this.state.value} onChange={this.handleChange}>
                <option value="1">1반</option>
                <option value="2">2반</option>
                <option value="3">3반</option>
                <option value="4">4반</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
};