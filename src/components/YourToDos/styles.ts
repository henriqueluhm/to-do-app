import styled from 'styled-components';

export const Container = styled.section`
  height: calc(100vh - 5rem);
  width: 50vw;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 15px;
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
`;