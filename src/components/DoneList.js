import React from "react";

const DoneList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500">No completed tasks</p>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <div 
          key={task._id}
          className="p-3 bg-gray-100 rounded"
        >
          <span className="text-gray-600">
            {`${index + 1}. ${task.description}`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DoneList;