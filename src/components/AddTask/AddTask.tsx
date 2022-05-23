import React, { ChangeEvent, useState } from "react";
import { v4 } from "uuid";

import { Container } from "./styles";
import usePersistedState from "../../hooks/usePersistedState";
import TaskList from "../TaskList/TaskList";

interface Props {
  currentDay: string;
}

export interface Task {
  id: string;
  value: string;
  day: string;
}

const AddTask: React.FC<Props> = ({ currentDay }) => {
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

  const onSetTodoListPersisted = (tasks: Task[]) => {
    setTodoListPersisted(tasks);
  };

  return (
    <>
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
        <TaskList
          currentDay={currentDay}
          onSetTodoListPersisted={onSetTodoListPersisted}
          todoListPersisted={todoListPersisted}
        />
      </Container>
    </>
  );
};

export default AddTask;
