import React, { useContext } from 'react'
import { FirstName, LastName } from './Component1';
import { countcontext } from '../App';
export default function Component4() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const {count,setCount} = useContext(countcontext)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>plus</button>
       <h2>{fname}  {lname}</h2>
    </div>
  )
}
