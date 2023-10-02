import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)
    const incrementCount = () =>{
        setCount(count+1)
        console.log(count);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}
