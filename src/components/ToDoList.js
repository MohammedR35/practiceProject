import React from "react";

const ToDoList = ({ tasks, markAsDone }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500">No tasks to show</p>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <div 
          key={task._id}
          className="flex justify-between items-center p-3 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
        >
          <span className="text-gray-800">
            {`${index + 1}. ${task.description}`}
          </span>
          <button
            onClick={() => markAsDone(task._id)}
            className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            ✓
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;