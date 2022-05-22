import React, { ChangeEvent, useState } from "react";
import { v4 } from "uuid";

import { Container } from "./styles";
import ToDoTask from "../ToDoTask/ToDoTask";
import usePersistedState from "../../hooks/usePersistedState";

interface Props {
  currentDay: string;
}

export interface Task {
  id: string;
  value: string;
  day: string;
}

const AddToDo: React.FC<Props> = ({ currentDay }) => {
  const [task, setTask] = useState<Task>({
    id: "",
    value: "",
    day: currentDay,
  });
  const [todoListPersisted, setTodoListPersisted] = usePersistedState("tasks", {
    todoList: [],
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask({ ...task, value: event.target.value });
  };

  const addTask = (): void => {
    setTodoListPersisted((previousState: Task[]) => [
      ...previousState,
      { ...task, id: v4(), day: currentDay },
    ]);

    setTask({
      id: "",
      value: "",
      day: currentDay,
    });
  };

  const deleteTask = (taskId: string): void => {
    setTodoListPersisted(
      todoListPersisted.filter((item: Task) => item.id !== taskId)
    );
  };

  return (
    <Container>
      <div className="addYourToDos">
        <div className="addTitle">
          <p>add something to do:</p>
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            maxLength={32}
            placeholder="add a task"
            value={task.value}
            onChange={handleChange}
          />
          <button onClick={addTask}>+</button>
        </div>
      </div>

      <div className="yourToDos">
        <div className="yourTitle">
          <p>your tasks for this day:</p>
        </div>
        <div>
          {todoListPersisted.map((task: Task) => {
            if (task.day === currentDay) {
              return (
                <ToDoTask key={task.id} task={task} deleteTask={deleteTask} />
              );
            }
            return undefined;
          })}
        </div>
      </div>
    </Container>
  );
};

export default AddToDo;
