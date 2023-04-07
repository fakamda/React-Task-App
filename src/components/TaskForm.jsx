import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
        title,
        description
    });
    setTitle('')
    setDescription('')
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-zinc-900 p-10 mb-4 " onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-800 p-3 w-full mb-2 rounded"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-800 p-3 w-full mb-2 resize-none rounded"
        ></textarea>
        <button className="bg-red-600 px-3 py-1 text-white hover:bg-red-700">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
