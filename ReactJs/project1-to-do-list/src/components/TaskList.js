import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
