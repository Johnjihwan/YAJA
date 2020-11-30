import React, { Component } from "react";
export default class SelectBox extends Component{
    constructor(props) {
        super(props);
        // 기본값을 부여합니다.
        this.state = {grade: "1", class: "1"};
      }
      
      handleChange = (event) =>
        this.setState({[event.target.name]: event.target.value});
    
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
                <option value="1학년">1학년</option>
                <option value="2학년">2학년</option>
                <option value="3학년">3학년</option>
              </select>
            </label>
            <label>
              반
              <select name="반" value={this.state.value} onChange={this.handleChange}>
                <option value="1반">1반</option>
                <option value="2반">2반</option>
                <option value="3반">3반</option>
                <option value="4반">4반</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
};