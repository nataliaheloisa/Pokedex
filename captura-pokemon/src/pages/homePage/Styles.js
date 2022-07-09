import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    width: 1024px;
    flex-wrap:wrap;
    gap: 1em;
    margin: 50px auto;
    justify-content: center;
    align-items: center;


    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid #99CC32;
        margin-top: 25px;
        gap: 1em;
        box-shadow: 1px 1px 2px 1px #99CC32;
    }

    img{
        width: 240px;
        transition: .3s linear;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
        
    }

    p{
        font-size:1.5em ;
        color: #3470b4F3;
    }

    button{
        padding: 10px;
        border: 1px solid #99CC32;
        border-radius: 21px;
        margin-bottom: 10px;
        background-color: white;
        color: red;
        cursor: pointer;
        transition: .3s linear;
        &:hover{
            background-color: #99CC33;
            color: #3470b4F3;
        }

    }

    @media screen and (max-width: 810px) {
    width: 80%;
    &:nth-child(1) {
      margin-top: 5em;
    }
  }

`;

export const Container = styled.div`
    width: 100%;
    padding-bottom: 25px;    

`;