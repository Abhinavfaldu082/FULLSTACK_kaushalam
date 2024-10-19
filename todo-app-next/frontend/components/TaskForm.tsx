import { useState } from 'react';
import { PlusIcon } from 'lucide-react';

interface TaskFormProps {
  addTask: (text: string) => Promise<void>;
}

export default function TaskForm({ addTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}