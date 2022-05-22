import React, { useState, useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import {
  Container,
  Logo,
  CurrentDay,
  ChooseMode,
  StyledBurger,
  LogoWrapper,
  DayNav,
} from "./styles";

const weekDays: string[] = [
  "sunday",
  "monday",
  "tuesday",
  "wedsneday",
  "thursday",
  "friday",
  "saturday",
];

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<string>("monday");

  return (
    <Container>
      <LogoWrapper>
        <Logo>to do app</Logo>
        <>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
          <DayNav open={open} onClick={() => setOpen(!open)}>
            <p>select a day:</p>
            <ul>
              {weekDays.map((item) => (
                <li>
                  <a href={`#${item}`} onClick={() => setCurrentDay(item)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </DayNav>
        </>
      </LogoWrapper>
      <CurrentDay>day: {currentDay}</CurrentDay>
      <ChooseMode>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
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
};

export default Header;
