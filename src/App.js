import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchTasks, saveTask, markAsDone } from "./services/api";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showToDo, setShowToDo] = useState(true);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error loading tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    try {
      await saveTask(newTask.trim());
      setNewTask('');
      await loadTasks();
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const handleMarkAsDone = async (id) => {
    try {
      await markAsDone(id);
      await loadTasks();
    } catch (err) {
      console.error('Error marking task as done:', err);
    }
  };

  const todoTasks = tasks.filter(task => !task?.isDone) || [];
  const doneTasks = tasks.filter(task => task?.isDone) || [];

  return (
    <div className="container">
      <h1>Daily Needs</h1>
      
      <div className="input-container">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}
        />
        <button className="add-button" onClick={handleAddTask}>Add</button>
      </div>

      <div className="list-buttons">
        <button 
          onClick={() => setShowToDo(true)}
          className={showToDo ? 'active' : ''}
        >
          To-Do List
        </button>
        <button 
          onClick={() => setShowToDo(false)}
          className={!showToDo ? 'active' : ''}
        >
          Done List
        </button>
      </div>

      <div className="task-list">
        <h2>{showToDo ? 'To-Do List' : 'Done List'}</h2>
        {loading ? (
          <p className="empty-message">Loading...</p>
        ) : (showToDo ? todoTasks : doneTasks).length === 0 ? (
          <p className="empty-message">
            {showToDo ? 'No tasks to do' : 'No completed tasks'}
          </p>
        ) : (
          <ul>
            {(showToDo ? todoTasks : doneTasks).map((task, index) => (
              <li key={task._id}>
                <span>{`${index + 1}. ${task.description}`}</span>
                {showToDo && (
                  <button 
                    className="check-button"
                    onClick={() => handleMarkAsDone(task._id)}
                  >
                    ✓
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;