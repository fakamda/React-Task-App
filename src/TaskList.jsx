import { useEffect, useState } from "react";
import { tasks as data } from "./tasks";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect (() =>{
    setTasks(data)
  })

  if (tasks.lenght === 0) {
    <h1>No hay tareas aun</h1>
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
