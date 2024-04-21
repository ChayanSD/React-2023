import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo } from "../features/todo/todoSlice"
function AddTodo(){
    const [input , setInput] = useState("");
    const dispatch = useDispatch();
   
    const addTodoHandler = (e) =>{
        e.preventDefault();
        //dispatch used the requcer to chanage on store
        dispatch(addTodo(input));
        setInput("");
    }   
    return (
        <form onSubmit={addTodoHandler}>
            <input 
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            >
            </input>
            <button type="submit" >
                Add
            </button>
        </form>
    )
}

export default AddTodo;