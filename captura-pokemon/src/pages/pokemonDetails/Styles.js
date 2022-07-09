import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 12.5vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.p`
color: #3470b4F9;
  font-size: 3em;
`;

export const Details = styled.div`
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4em;
  align-items: center;

  h1 {
    color: #3470b4F9;
    text-align: center;
  }
`;

export const Poke = styled.div`
  background-color: #99CC33;
  opacity: .9;
  border-radius: 21px;
  padding: 1em;
  width: 45%;

  img {
    width: 100%;
    transition: .3s linear;
    cursor: pointer;
      &:hover{
        transform: scale(1.1)
      }
  }

  @media screen and (max-width: 810px) {
    width: 80%;
    &:nth-child(1) {
      margin-top: 5em;
    }
  }
`;

export const Stats = styled(Poke)`
  div{
    background-color: #99CC33; 
    padding: 1em;
    margin: 1em 0;
    border-radius: 21px;
    h2 {
      color:#3470b4F9;
      text-align: center;
      padding: .5em;
    }
    h3 {
      color: #3470b4F9;
      text-align: center;
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
    }
    h3, li {
      color: #3470b4F9;
      padding: .5em;
    }
  }
  @media screen and (max-width: 810px) {
    width: 80%;
  }
`;