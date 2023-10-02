import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [number,setNumber] = useState(100);
    // const isEven = ()=>{
    //     let i = 0;
    //     while(i<2000000000) i++;
    //     return count%2 === 0;
    // }
    const isEven =useMemo( ()=>{
        let i = 0;
        while(i<2000000000) i++;
        return count%2 === 0;
    },[count])
    const IncrementCount =  ()=>{
        setCount(count+1);
    }
    const DecrementNumber=()=>{
        setNumber(number-1);
    }
  return (
    <div>
        <h1>Your count is {count}</h1>
        <button onClick={IncrementCount}>Increment Count</button>
        <h1>{isEven?"Your count is :Even":"Your count is :ODD"}</h1>
        <h1>Your Number is {number}</h1>
        <button onClick={DecrementNumber}>Decrement Number</button>
    </div>
  )
}
