import React, { useState, useContext } from 'react'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, Logo, CurrentDay, ChooseMode, StyledBurger, LogoWrapper, DayNav } from './styles';

interface Props {
  toggleTheme(): void; 
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <LogoWrapper>
        <Logo>
          to do app
        </Logo>
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <DayNav open={open} onClick={() => setOpen(!open)}>
          <p>select a day:</p>
          <ul>
            <li>Sunday</li>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wedsneday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
          </ul>
        </DayNav>
        </>
      </LogoWrapper>
      <CurrentDay>
        day: monday
      </CurrentDay>
      <ChooseMode>
        <Switch
          onChange={toggleTheme}
          checked ={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.text}
          onColor={colors.whiteColor}
          offHandleColor={colors.text}
          />
      </ChooseMode>
    </Container>       
  );
}

export default Header;