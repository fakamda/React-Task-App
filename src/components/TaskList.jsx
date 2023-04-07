import TaskContext from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { useContext } from "react";

function TaskList() {
  const {tasks, deleteTask} = useContext(TaskContext)
  if (tasks.lenght === 0) {
    return <h1 className="text-white text-xl font-bold">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
