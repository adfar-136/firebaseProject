import React from 'react'
import { useSelector } from 'react-redux'

export default function Counterrrrrrr() {
    const money = useSelector((state)=>state.money)
  return (
    <div>
        <h1>Money is {money}</h1>
    </div>
  )
}
