import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  transition: all linear 0.2s;

  .addYourToDos {
    width: 50vw;
    border-right: 1px solid ${(props) => props.theme.colors.lines};
    height: calc(100vh - 5rem);
  }

  .addTitle {
    display: flex;
    justify-content: center;
    padding-top: 15px;
  }

  p {
    height: 1.6rem;
    transition: all linear 0.2s;
    border-bottom: 1px solid ${(props) => props.theme.colors.lines};
  }

  .inputWrapper {
    display: flex;
    width: 100%;
    padding-top: 1.75rem;
    justify-content: center;
  }

  input {
    font-family: "PT Mono", monospace;
    border: 2px solid ${(props) => props.theme.colors.lines};
    border-radius: 5px;
    outline: none;

    height: 35px;
    width: 50%;
    padding: 16px;

    transition: all linear 0.1s;
  }

  button {
    margin-left: 3rem;
    cursor: pointer;
    width: 50px;
    border-radius: 25px;
    border: 2px solid ${(props) => props.theme.colors.lines};
    font-size: 1.8rem;
    background-color: ${(props) => props.theme.colors.lines};
    outline: none;
    color: #222;

    transition: all linear 0.1s;
  }

  button:hover {
    background-color: #222;
    border: 2px solid #737373;
    color: #fff;
  }

  input:hover {
    border: 3px solid #222;
  }

  .yourToDos {
    height: calc(100vh - 5rem);
    width: 50vw;

    .yourTitle {
      display: flex;
      justify-content: center;
      padding-top: 15px;
    }

    p {
      height: 1.6rem;
      transition: all linear 0.2s;
      border-bottom: 1px solid ${(props) => props.theme.colors.lines};
    }
  }
`;
