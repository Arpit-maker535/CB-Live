import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./actions/taskAction";
const App = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), name: task }));
      setTask("");
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new Task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => dispatch(deleteTask(task.id))}>
                DELETE
              </button>
            </li>
          ))
        ) : (
          <p>No Task Available. Add a New Task</p>
        )}
      </ul>
    </div>
  );
};
export default App;
