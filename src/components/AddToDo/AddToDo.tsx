import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const AddToDo: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        <p> 
          add something to do:
        </p>
      </div>

      <div>
        <form>
          <input type="text" placeholder="write here"/>
          <button type="button">+</button>
        </form>
      </div>

    </Container>      
  );
}

export default AddToDo;