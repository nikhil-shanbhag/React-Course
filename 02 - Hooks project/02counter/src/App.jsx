import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count<20 ? count+1 : count)
  }

  const removeValue = () => {
    setCount(count<=0 ? count : count-1)
  }

  return (
    <>

    <h1>React Hooks</h1>
    <h2>Count: {count}</h2>
    <button onClick={addValue}>Add</button>
    <button onClick={removeValue}>Remove</button>
    </>

  )
}

export default App
