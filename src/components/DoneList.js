import React from "react";

const DoneList = ({ tasks }) => {
  return (
    <ul> {/* Render the completed tasks as a list */}
      {tasks.map((task) => ( // Iterate over the completed tasks
        <li key={task.id}> {/* Each completed task item */}
          {task.description} {/* Display the task description */}
        </li>
      ))}
    </ul>
  );
};

export default DoneList;
