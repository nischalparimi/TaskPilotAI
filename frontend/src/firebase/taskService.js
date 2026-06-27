import { db } from "./firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const taskCollection = collection(db, "tasks");

// Add Task
export const saveTask = async (task) => {
  try {
    const docRef = await addDoc(taskCollection, task);
    return docRef.id;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

// Get All Tasks
export const getTasks = async () => {
  try {
    const snapshot = await getDocs(taskCollection);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error loading tasks:", error);
    return [];
  }
};

// Delete Task
export const removeTask = async (id) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

// Edit Task
export const editTask = async (id, updatedTask) => {
  try {
    await updateDoc(doc(db, "tasks", id), updatedTask);
  } catch (error) {
    console.error("Error editing task:", error);
  }
};

// Toggle Completed
export const updateTaskStatus = async (id, completed) => {
  try {
    await updateDoc(doc(db, "tasks", id), {
      completed,
    });
  } catch (error) {
    console.error("Error updating task:", error);
  }
};