import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

import {
  saveTask,
  getTasks,
  removeTask,
  editTask,
  updateTaskStatus,
} from "../firebase/taskService";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Load tasks when app starts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  // Add task
  const addTask = async (task) => {
  try {
    await saveTask(task);
    await fetchTasks();
    toast.success("Task Added");
  } catch (error) {
    toast.error("Failed to Add Task");
  }
};

  // Delete task
  const deleteTask = async (id) => {
  try {
    await removeTask(id);
    await fetchTasks();
    toast.success("Task Deleted");
  } catch (error) {
    toast.error("Delete Failed");
  }
};

  // Edit task
  const updateTask = async (id, updatedTask) => {
  try {
    await editTask(id, updatedTask);
    await fetchTasks();
    toast.success("Task Updated");
  } catch (error) {
    toast.error("Update Failed");
  }
};

  // Toggle completed status
  const toggleCompleted = async (id) => {
    try {
      const task = tasks.find((t) => t.id === id);

      if (!task) return;

      await updateTaskStatus(id, !task.completed);

      await fetchTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        toggleCompleted,
        fetchTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}