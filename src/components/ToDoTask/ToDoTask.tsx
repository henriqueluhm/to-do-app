import { Container } from './styles';

interface Props {
  task: string;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) =>  { 
  return (
    <Container>
      <div className="check-box-group">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="taskName">{task}</span>
          <button onClick={() => {deleteTask(task)}}>
            -    
          </button>
        </label>
      </div>
    </Container>
  )
}

export default TodoTask;
