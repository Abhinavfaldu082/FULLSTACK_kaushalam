import { Trash2Icon } from 'lucide-react';

export default function TaskItem({ task, toggleComplete, deleteTask }) {
  // Check if task is undefined or null
  if (!task) {
    return null; // or return a placeholder/loading state
  }

  return (
    <li className="flex items-center bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
      <label className="flex items-center flex-grow p-4 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task._id, task.completed)}
          className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span className={`ml-3 ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
          {task.text}
        </span>
      </label>
      <button
        onClick={() => deleteTask(task._id)}
        className="p-4 text-red-600 hover:text-red-800 focus:outline-none"
      >
        <Trash2Icon className="w-5 h-5" />
      </button>
    </li>
  );
}