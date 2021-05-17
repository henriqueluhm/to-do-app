import React, { useState,useContext } from 'react'
import { ThemeContext } from 'styled-components';
import TodoTask from '../AddToDo/TodoTask/TodoTask';

import { Container } from './styles';

interface Props {
  toggleTheme(): void; 
}

const YourToDos: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [check, setCheck] = useState(false);

  return (
    <Container>
      <div>
        <p> 
          your tasks to do:
        </p>
      </div>

     
      
    </Container>       
  );
}

export default YourToDos;