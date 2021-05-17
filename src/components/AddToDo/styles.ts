import styled from 'styled-components';

export const Container = styled.section`
  height: calc(100vh - 5rem);
  width: 50vw;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-right: 1px solid ${props => props.theme.colors.lines};
  transition: all linear 0.2s;
  
 
  div {
    display: flexbox;
    align-items: flex-start;
    justify-content: center;
  }

  p {
    border-bottom: 1px solid ${props => props.theme.colors.lines};
    height: 1.7rem;
    transition: all linear 0.2s;

  } 

  .form {
    display:flex;
    width: 100%;
    padding-top: 3rem;
    justify-content: center;
  }

  input {
    font-family: 'PT Mono', monospace;
    border: 3px solid ${props => props.theme.colors.lines};
    border-radius: 3px;
    outline: none;

    height: 35px;
    width: 50%;
    padding: 16px;

    transition: all linear 0.2s;

  }

  button {
    margin-left: 3rem;
    cursor: pointer;
    width: 8%;
    border-radius: 30px;
    border: 2px solid ${props => props.theme.colors.lines};
    font-size: 1.8rem;
    background-color: ${props => props.theme.colors.lines};
    outline: none;
    color: #222;
    
    transition: all linear 0.2s;

  }

  button:hover {
    background-color: #222;
    border: 2px solid #737373;
    color: #fff;

  }

  input:hover {
    border: 3px solid #222;
  }

  
`;