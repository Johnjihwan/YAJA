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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .white_box{
        width: 1419px;
        height: 840px;
        background: #ffff;
    }
    .content_wrap{
        flex-direction: column;
    }
`;