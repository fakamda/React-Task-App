import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    console.log(title)
  }
  return (
    <div>
      <form onSubmit={}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
