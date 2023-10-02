import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [count,setCount] = useState(0);
    const IncrementCount =  ()=>{
        setCount(count+1);
    }
    const DecrementCount=()=>{
        setCount(count-1);
    }
    const func =useCallback(()=>{
        console.log("Hello World")
    },[])
  return (
    <div>
        <Child name={func}/>
        <h1>{count}</h1>
        <button onClick={IncrementCount}>Increment COunt</button>
        <button onClick={DecrementCount}>Decrement COunt</button>
    </div>
  )
}
