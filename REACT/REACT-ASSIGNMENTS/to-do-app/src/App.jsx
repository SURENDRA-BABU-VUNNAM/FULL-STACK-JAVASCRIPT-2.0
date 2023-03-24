import { useState } from 'react'
import './App.css'
import  {AddToDo,removeTodo,editTodo}  from './features/features'
import {useSelector ,useDispatch} from 'react-redux'



function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state)=> state.Todos.todos);
  const dispatch = useDispatch()
  return (
    <div>
      <input className='' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={()=>dispatch(AddToDo(input))}>add</button>
      <div>
        {todos.map((todo) => 
          (<h1 key={todo.id} >{todo.text} 
          <button onClick={()=>dispatch(removeTodo(todo.id))}>del</button>
          <button onClick={()=>dispatch(editTodo(todo.id))}>edit</button>
           </h1>)

        )}
      </div>
    </div>
  )
}

export default App
