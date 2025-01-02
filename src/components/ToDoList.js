import React from "react";

const ToDoList = ({ tasks, markAsDone }) => {
  return (
    <ul> {/* Render the tasks as a list */}
      {tasks.map((task) => ( // Iterate over the tasks array
        <li key={task.id}> {/* Each task item */}
          {task.description} {/* Display the task description */}
          <button onClick={() => markAsDone(task.id)}>✔</button> {/* Button to mark as done */}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
