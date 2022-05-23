import React, { useEffect } from "react";

import ToDoTask from "../Task/Task";

interface Props {
  currentDay: string;
  todoListPersisted: Task[];
  onSetTodoListPersisted: (tasks: Task[]) => void;
}

export interface Task {
  id: string;
  value: string;
  day: string;
}

const TaskList: React.FC<Props> = ({
  currentDay,
  todoListPersisted,
  onSetTodoListPersisted,
}) => {
  const deleteTask = (taskId: string): void => {
    onSetTodoListPersisted(
      todoListPersisted.filter((item: Task) => item.id !== taskId)
    );
  };

  useEffect(() => {
    console.log("todoListPersisted", todoListPersisted);
  }, [todoListPersisted]);

  return (
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
  );
};

export default TaskList;
