import React, { ChangeEvent, useState } from 'react';

import { Container } from './styles';
import ToDoTask from '../ToDoTask/ToDoTask';

interface Props {
  toggleTheme(): void;
}

const AddToDo: React.FC<Props> = ({ toggleTheme }) => {

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
      return task !== taskNameToDelete;
    }
    ))
  };
  
  return (
    <Container>
      <div className="addYourToDos">
        <div className="addTitle">
          <p> 
            add something to do:
          </p>
        </div>
        <div className="form">
            <input type="text" placeholder="add a task" value={task} onChange={handleChange} />
            <button onClick={addTask}>+</button>        
        </div>
      </div>

      <div className="yourToDos">
        <div className="yourTitle">
          <p> 
            your tasks for this day:
          </p>
        </div>
        <div>
          {todoList.map((task:string, key: number) => {
            return <ToDoTask key={key} task={task} completeTask={completeTask}/>;
          })}
        </div>
      </div>
    </Container>      
  );
}

export default AddToDo;