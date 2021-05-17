import React from 'react'
import { Container } from './styles';

interface Props {
  task: string;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) =>  { 
  return (
    <Container>
      <div className="check-box-group">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>

          <span className="label">{task}</span>

          <button onClick={() => {
          completeTask(task);
          }
        }>
        -      
      </button>

        </label>
      </div>
    </Container>
  )
}

export default TodoTask;
