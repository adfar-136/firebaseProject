import React, { useState } from 'react'

export default function Localstorage() {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const handleAdd = ()=>{
        localStorage.setItem("name",name)
        localStorage.setItem("password",password)
    }
    const handleRemove =()=>{
        localStorage.removeItem('name');
        localStorage.removeItem("password")
    }
  return (
    <div>
        <form>
            <h1>Name of the Student: </h1>
            <input type="text" placeholder='Enter Name' 
            value={name}
            onChange={(e)=>{ setName(e.target.value) }}/>
            <h1>Password of the Student</h1>
            <input type="password" placeholder='Enter your Password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}} />
            <button onClick={handleAdd}>Store</button>
        </form>
        <button onClick={handleRemove}>Remove</button>

        {localStorage.getItem("name") && (
        <h1>My name is :{localStorage.getItem("name")}</h1>
        )}
        {localStorage.getItem("password") && (
        <h1>My password is :{localStorage.getItem("password")}</h1>
        )}
    </div>
  )
}
