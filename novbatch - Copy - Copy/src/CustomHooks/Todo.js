import React, { useState } from 'react'
import useList from './useList'
export default function Todo() {
    const {list,push,pull} = useList();
    const [todo,setTodo] =useState("");
    const handleSubmit = (e)=>{
      e.preventDefault()
      push(todo);
      setTodo("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} 
            onChange={(e)=>setTodo(e.target.value)}/>
            <input type="submit" value="Add Todo" />
        </form>
        {list.map((item,index)=>{
            return (
                <>
                <li key={index}>{item}</li>
                <button onClick={()=>pull(index)}>Remove</button>
                </>
            )
        })}
    </div>
  )
}
