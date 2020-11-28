import React, { Component } from "react";
import * as login from "./Style";
import LoginTemp from "../LoginPage/LoginTemp";
import JoinLoginTemp from "../Templates/JoinLoginTemp";

export default class Login extends Component {
    render() {
        return (
            <login.Page>
                <LoginTemp/>
                <JoinLoginTemp/>
            </login.Page>
        );
    }
}