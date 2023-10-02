import React from 'react'

export default function Child(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={()=>{props.dispatch("hello")}}>hello</button>
    </div>
  )
}
