import styled from 'styled-components';

export const Container = styled.div`
  height: 5rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  transition: all linear 0.2s;
`;

export const Logo = styled.div`
  font: regular 'PT Mono', monospace;
  font-size: 2rem;
  letter-spacing: 4px;
  color: ${props => props.theme.colors.logoText};
  padding-top: 5px;
  transition: all linear 0.2s;
`;

export const CurrentDay = styled.div`
    padding-top: 1.5rem;
    margin-right: auto;
    margin-left: 44%;
    position: fixed;
`;

export const ChooseMode = styled.div`
  padding-top: 1rem;
  text-align: center;
`;

export const StyledBurger = styled.div<{ open: boolean }>`
  width: 24px;
  height: 18px;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  margin-left: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  div {
    width: 24px;
    height: 2px;
    background-color: ${props => props.theme.colors.logoText} ;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all linear 0.2s;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      width: ${({ open }) => open ? '15px' : '24px'};
    }
    
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      display: ${({ open }) => open ? 'none' : 'flex'};
    }
    
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      width: ${({ open }) => open ? '15px' : '24px'};
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const DayNav = styled.nav<{ open: boolean }>`
  list-style: none;
  display: flex;    
  flex-flow: column nowrap;
  display: ${({ open }) => open ? 'flex' : 'none'};
  position: sticky;
  top: 0;
  right: 0;
  height: 22rem;
  width: 20rem;
  padding: 1rem 2rem;
  margin-top: 3rem;
  border: 2px solid ${props => props.theme.colors.lines};
  background-color: ${props => props.theme.colors.navFill};
  transition: all linear 0.2s;

  p, li {
    color: ${props => props.theme.colors.text};
    transition: all linear 0.2s;
  }

  p {
    text-align: center
  }

  li {
    margin: 1rem 0;
    cursor: pointer;
  }

  li:hover {
    text-decoration: underline;
  }
`;