import React, { useState } from "react";

// Component for the task input box
const InputBox = ({ addTask }) => {
  const [task, setTask] = useState("");

  // Handles the submit action
  const handleSubmit = () => {
    if (task.trim()) {
      addTask(task); // Call the parent function to add the task
      setTask(""); // Clear the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Update state on input change
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default InputBox;
