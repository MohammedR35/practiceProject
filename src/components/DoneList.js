import React from "react";

// Component to render the Done list
const DoneList = ({ tasks }) => {
  return (
    <div>
      <h2>Done List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
