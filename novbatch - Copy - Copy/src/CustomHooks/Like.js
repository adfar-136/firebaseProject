import React from 'react'
import useCounter from './useCounter'
export default function Like() {
    const {count,increment,decrement} = useCounter()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>increment()}>Like</button>
    </div>
  )
}
