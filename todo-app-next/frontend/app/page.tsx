'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (text: string) => {
    try {
      await axios.post('/api/tasks', { text, completed: false });
      fetchTasks();
    } catch (error) {
      console.error('Failed to add task:', error);
      // Handle error
    }
  };

  const toggleComplete = async (id: string, completed: boolean) => {
    try {
      await axios.put(`/api/tasks/${id}`, { completed: !completed });
      fetchTasks();
    } catch (error) {
      console.error('Failed to toggle task:', error);
      // Handle error
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
      // Handle error
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-3xl font-bold">To-Do List</h1>
      </div>
      <div className="p-6">
        <TaskForm addTask={addTask} />
        {isLoading ? (
          <p>Loading tasks...</p>
        ) : (
          <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        )}
      </div>
    </div>
  );
}