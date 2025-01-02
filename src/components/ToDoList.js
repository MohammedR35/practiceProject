import React from "react";

// Component to render the To-Do list
const ToDoList = ({ tasks, markAsDone }) => {
  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description}{" "}
            <button onClick={() => markAsDone(task.id)}>✔</button> {/* Mark as done */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
