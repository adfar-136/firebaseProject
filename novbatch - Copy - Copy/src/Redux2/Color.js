import React from 'react'
import { setBackgroundColor } from './action';
import { useDispatch } from 'react-redux'

export default function Color({color}) {
    const dispatch = useDispatch();
    const handleColor = ()=>{
        dispatch(setBackgroundColor(color))
    }

  return (
    <div>
        <button onClick={handleColor}>{color}</button>
    </div>
  )
}
