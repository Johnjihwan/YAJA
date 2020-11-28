import React, { Component } from "react";
import * as Template from "./Style";
import MainImg from "../images/yaja_temp_img.png";

class JoinLoginTemp extends Component {
    render() {
        return(
            <Template.Page>
                <div class="white_box">
                    <div class="content_wrap">
                        <img src={MainImg} alt="메인이미지"></img>
                    </div>
                </div>
            </Template.Page>
        );
    }
}
export default JoinLoginTemp;