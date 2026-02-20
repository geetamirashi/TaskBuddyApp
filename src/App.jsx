import Taskform from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/ProgressTracker";

export default function App() {
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>

      <Taskform />
      <TaskList />
      <Progresstracker />

      <button>Clear All Tasks</button>
    </div>
  );
}