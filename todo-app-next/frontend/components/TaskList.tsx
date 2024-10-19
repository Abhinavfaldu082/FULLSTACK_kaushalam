import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  // Check if tasks is undefined or null
  if (!tasks) {
    return <p>Loading tasks...</p>; // or any other loading state
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}