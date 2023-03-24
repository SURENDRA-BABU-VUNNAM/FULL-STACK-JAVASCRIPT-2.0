import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const TodoSlice = createSlice({
    name : "ToDo",
    initialState,
    reducers : {
        AddToDo : (state,action) => {
            const Todo = {
                id:nanoid(),
                text : action.payload
            }
            state.todos.push(Todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

        editTodo: (state,action) => {
            state.todos =state.todos.map((todo)=> 
            todo.id === action.payload.id ? action.payload : todo)
        }
    }
})

export const {AddToDo,removeTodo,editTodo} = TodoSlice.actions

export default TodoSlice.reducer