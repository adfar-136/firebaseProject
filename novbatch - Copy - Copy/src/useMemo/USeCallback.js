import React, { useCallback, useState } from 'react'
const adfar = new Set();
export default function USeCallback() {
    const [count,setCount]= useState(0)
    const [ number,setNumber]= useState(0)
    const incrementCount =useCallback( ()=>{
        setCount(count+1)
    },[count])
    const decrementCount = useCallback(()=>{
        setCount(count-1)
    },[count])
    const incrementNumber =useCallback( ()=>{
        setNumber(number+1)
    },[number])
    const decrementNumber =useCallback( ()=>{
        setNumber(number-1)
    },[number])
    adfar.add(incrementCount)
    adfar.add(decrementCount)
    adfar.add(incrementNumber)
    adfar.add(decrementNumber)
    alert(adfar.size)
  return (
    <div>
        <h1>{count}</h1>
        <h1>{number}</h1>
       <button onClick={incrementCount}>Increment count</button>
       <button onClick={decrementCount}>Decrement count</button>
       <button onClick={incrementNumber}>Increment Number</button>
       <button onClick={decrementNumber}>Decrement Number</button>
    </div>
  )
}
