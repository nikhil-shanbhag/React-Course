import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState(" ")
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  const handleChange=(e)=>{
    setInput(e.target.value)
  }

  const handleClick=(e)=>{
    e.preventDefault();
    if(isEditing) {
      setTodo(todo.map((item, index) => 
        index === currentTodo.index ? input : item
      ))
      setIsEditing(false);
      setInput("");
    } else {
      setTodo([...todo, input])
      setInput("");
    }
  }

  const handleDelete = (indexToDelete) => {
    setTodo(todo.filter((_, index) => index !== indexToDelete));
  }

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentTodo({index, text: todo[index]});
    setInput(todo[index]);
  }

  return (
    <>
      <form>
        <input type="text" value={input} onChange={handleChange}/>
        <button onClick={handleClick}>{isEditing ? "Update" : "Add"}</button>
      </form>

      <ul>
        {todo.map((val, index)=>{
          return (
            <li key={index}>
              {val}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
