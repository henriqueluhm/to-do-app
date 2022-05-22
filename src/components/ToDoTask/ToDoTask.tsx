import { Task } from "../AddToDo/AddToDo";
import { Container } from "./styles";

interface Props {
  task: Task;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <Container>
      <div className="check-box-group">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="taskName">{task.value}</span>
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            -
          </button>
        </label>
      </div>
    </Container>
  );
};

export default TodoTask;
