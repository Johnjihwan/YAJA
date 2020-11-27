import styled from "styled-components";

export const Page = styled.div `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }  
    width: 100%;
    height: 97px;
    display: flex;
    background-color: #8CAE7E;
    justify-content: space-between;
    .btn_wrap{
        width: 770px;
        margin-top: 16px;
    }
    .btn_wrap > button{
        width: 184px;
        height: 65px;
        margin-left: 65px;
        font-size: 25px;
        border: 3px solid white;
        background: none;
        color: #ffff;
        border-radius: 10px;
    }
`;
