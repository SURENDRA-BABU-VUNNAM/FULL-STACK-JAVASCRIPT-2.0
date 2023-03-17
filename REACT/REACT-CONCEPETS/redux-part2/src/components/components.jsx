import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { removeTodo } from "../features/todoSlice";

function Components() {
    const todos = useSelector((state)=> state.todos.todos)
    const dispatch = useDispatch()
    return (
        <div>
            {todos.map((todo)=>(
                <>
                    <h1 key={todo.id}>{todo.text}</h1>
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>x</button>
                </>
            ))}
        </div>
    )
}

export default Components