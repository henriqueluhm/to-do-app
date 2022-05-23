import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.75rem;

  .check-box-group {
    display: flex;
    flex-direction: column;
    margin: 0 4rem;
  }

  .custom-checkbox {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }

  .custom-checkbox .taskName {
    font-size: 1em;
    margin: 0.5rem 0.5rem;
  }

  .custom-checkbox .checkmark {
    cursor: pointer;
    width: 28px;
    height: 28px;
    border: 2px solid #9b9b9b;
    display: inline-block;
    border-radius: 3px;
    background: #222
      url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png)
      center/1250% no-repeat;
    transition: background-size 0.2s ease;
  }

  .custom-checkbox input:checked + .checkmark {
    background-size: 60%;
    transition: background-size 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
  }

  .custom-checkbox input {
    display: none;
  }

  button {
    margin-left: 1.5rem;
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
`;
