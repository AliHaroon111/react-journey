import { useState } from 'react'
import './App.css'

function App() {
  let counter = 15

  return (
    <>
     <h1>React course with Hitesh {counter}</h1>
     <h2>Counter value: {counter}</h2>
     <button>Add Value</button> {" "}
     <button>Remove Value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
