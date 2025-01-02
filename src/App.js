import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS file for styling
import Header from "./components/Header"; // Header component
import InputBox from "./components/InputBox"; // Input box component
import ToDoList from "./components/ToDoList"; // To-Do list component
import DoneList from "./components/DoneList"; // Done list component
import { fetchTasks, saveTask, markAsDone } from "./services/api"; // API functions

const App = () => {
  const [tasks, setTasks] = useState([]); // State for storing tasks
  const [showToDo, setShowToDo] = useState(true); // State for toggling between To-Do and Done lists

  // Fetch tasks from the backend when the component is mounted
  useEffect(() => {
    loadTasks();
  }, []);

  // Function to fetch tasks and update the state
  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  // Function to add a new task
  const addTask = async (description) => {
    await saveTask(description); // Call the API to save the task
    loadTasks(); // Refresh the list of tasks
  };

  // Function to mark a task as done
  const handleMarkAsDone = async (id) => {
    await markAsDone(id); // Call the API to update the task status
    loadTasks(); // Refresh the list of tasks
  };

  return (
    <div className="container"> {/* Apply the styling defined in App.css */}
      <Header /> {/* Render the header */}
      <InputBox addTask={addTask} /> {/* Render the input box for adding tasks */}

      {/* Buttons to toggle between the To-Do list and Done list */}
      <div className="list-buttons">
        <button onClick={() => setShowToDo(true)}>To-Do List</button>
        <button onClick={() => setShowToDo(false)}>Done List</button>
      </div>

      {/* Conditionally render the To-Do list or Done list based on the toggle */}
      {showToDo ? (
        <ToDoList
          tasks={tasks.filter((task) => !task.isDone)} // Filter tasks to show only incomplete ones
          markAsDone={handleMarkAsDone} // Pass the function to mark tasks as done
        />
      ) : (
        <DoneList
          tasks={tasks.filter((task) => task.isDone)} // Filter tasks to show only completed ones
        />
      )}
    </div>
  );
};

export default App;
