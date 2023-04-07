import React from 'react'
import { useContext } from 'react'
import TaskContext from '../context/TaskContext'


function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div className='bg-zinc-900 text-white p-4 rounded-md '>
        <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
        <p className='text-gray-500 text-small'>{task.description}</p>
        <button className='bg-red-600 px-2 py-1 rounded mt-4 hover:bg-red-700' onClick={() => deleteTask(task.id)}>
          Eliminar tarea
        </button>
    </div>
  )
}

export default TaskCard