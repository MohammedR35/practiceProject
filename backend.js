const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Task = require("./taskModel");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Endpoints

// Fetch all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from the database
    res.json(tasks); // Send tasks to the client
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err.message });
  }
});

// Add a new task
app.post("/tasks", async (req, res) => {
  try {
    const { description } = req.body; // Get task description from the request body
    const newTask = new Task({ description }); // Create a new task
    const savedTask = await newTask.save(); // Save it to the database
    res.status(201).json(savedTask); // Respond with the saved task
  } catch (err) {
    res.status(400).json({ message: "Error adding task", error: err.message });
  }
});

// Mark a task as done
app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id); // Find task by ID
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.isDone = true; // Mark as done
    const updatedTask = await task.save(); // Save changes
    res.json(updatedTask); // Send updated task
  } catch (err) {
    res.status(500).json({ message: "Error updating task", error: err.message });
  }
});

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/todo", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
