import React, { ChangeEvent, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
import TodoTask from './TodoTask/TodoTask';

interface Props {
  toggleTheme(): void;
}

const AddToDo: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {

    setTodoList([...todoList, task]);
    setTask("");
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task != taskNameToDelete;
    }
    ))
  };
  
  return (
    <Container>
      <div>
        <p> 
          add something to do:
        </p>
      </div>

      <div className="form">
          <input type="text" placeholder="add a task" value={task} onChange={handleChange} />
          <button onClick={addTask}>+</button>        
      </div>
      <div>
        {todoList.map((task:string, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>

    </Container>      
  );
}

export default AddToDo;