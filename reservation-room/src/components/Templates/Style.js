import styled from "styled-components";

export const Page = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    width: 100%;
    height: 1080px;
    background: #DAF2D1;
    display: flex;
    justify-content: center;
    align-items: center;
    .white_box{
        width: 1419px;
        height: 840px;
        background: #F3FFF1;
        border-radius: 10px;
    }
    .content_wrap {
        width: 50%;
        height: 100%;
        margin-left: 50%;
        background: #ffff;
    }
    .content_wrap > img {
        margin-top: 5%;
        margin-left: 8%;
    }
`;