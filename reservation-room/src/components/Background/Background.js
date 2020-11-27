import React, { Component } from "react";
import * as Back from "./Style";
import MainPage_Back from "../images/yaja_back.png";

class Background extends Component {
    render() {
        return (
            <Back.Page>
                <img src={MainPage_Back} alt="배경"></img>
            </Back.Page>
        )
    }
}
export default Background;