import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from "./action"
export default function Counterrr() {
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    const handleIncrement =()=>{
        dispatch(increment())
    }
    const handleDecrement =()=>{
        dispatch(decrement())
    }
  return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
        <h1>{counter}</h1>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
