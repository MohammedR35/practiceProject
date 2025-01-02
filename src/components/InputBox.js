import React, { useState } from "react";

const InputBox = ({ addTask }) => {
  const [task, setTask] = useState(""); // State to store the current input value

  // Handle the submission of the task
  const handleSubmit = () => {
    if (task.trim()) { // Only add non-empty tasks
      addTask(task); // Call the parent function to add the task
      setTask(""); // Clear the input field
    }
  };

  return (
    <div>
      <input
        type="text" // Input field for entering tasks
        placeholder="What needs to be done?" // Placeholder text
        value={task} // Bind the input value to the state
        onChange={(e) => setTask(e.target.value)} // Update the state on input change
      />
      <button onClick={handleSubmit}>Add</button> {/* Submit button */}
    </div>
  );
};

export default InputBox;
