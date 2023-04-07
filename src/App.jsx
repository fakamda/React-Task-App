import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


function App() {

  return (
    <main className="h-screen">
      <div className='container mx-auto bg-zinc-800'>
      <TaskForm/>
      <TaskList/>
      </div>
    </main>

  );
}

export default App;
