import React from 'react'

function TaksCard({task}) {
  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
    </div>
  )
}

export default TaksCard