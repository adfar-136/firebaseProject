import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementCounter,decrementCounter } from './Action-creators/action';
export default function Thunkbuttons() {
    const dispatch = useDispatch();
    const handleIncrement =()=>{
       dispatch(incrementCounter(1000))
    }
    const handleDecrement =()=>{
        dispatch(decrementCounter(1000))
     }
  return (
    <div>
        <button onClick={handleIncrement}>++++</button>
        <button onClick={handleDecrement}>----</button>
    </div>
  )
}
