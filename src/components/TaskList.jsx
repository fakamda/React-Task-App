import TaksCard from "./TaksCard";

function TaskList({tasks}) {

  if (tasks.lenght === 0) {
    <h1>No hay tareas aun</h1>
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaksCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
