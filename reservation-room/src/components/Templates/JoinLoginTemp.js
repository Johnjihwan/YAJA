import React, { Component } from "react";
import * as Template from "./Style";
import GreenLogo from "../images/GreenLogo.png";
import Read from "../images/read.png";

class JoinLoginTemp extends Component {
    render() {
        return(
            <Template.Page>
                <div class="white_box">
                    <div class="content_wrap">
                        <img src={GreenLogo} alt="로고"></img>
                        <img src={Read} alt="읽는중"></img>
                    </div>
                </div>
            </Template.Page>
        );
    }
}
export default JoinLoginTemp;