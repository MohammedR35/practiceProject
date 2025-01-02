import axios from "axios";

const API_URL = "http://localhost:8080/tasks"; // Backend API base URL

// Function to fetch all tasks from the backend
export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL); // Make a GET request to fetch tasks
    return response.data; // Return the list of tasks
  } catch (error) {
    console.error("Error fetching tasks:", error); // Log any errors
    return [];
  }
};

// Function to add a new task to the backend
export const saveTask = async (description) => {
  try {
    await axios.post(API_URL, description, { // Make a POST request to add a task
      headers: { "Content-Type": "text/plain" }, // Send the task as plain text
    });
  } catch (error) {
    console.error("Error adding task:", error); // Log any errors
  }
};

// Function to mark a task as done
export const markAsDone = async (id) => {
  try {
    await axios.put(`${API_URL}/${id}`); // Make a PUT request to update the task status
  } catch (error) {
    console.error("Error marking task as done:", error); // Log any errors
  }
};
