import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('API Response:', response.data); // Debug log
    // Ensure we always return an array
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

export const saveTask = async (description) => {
  try {
    const response = await axios.post(API_URL, { description });
    console.log('Save Task Response:', response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const markAsDone = async (id) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`);
    console.log('Mark Done Response:', response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error("Error marking task as done:", error);
    throw error;
  }
};