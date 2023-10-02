import React, { useContext } from 'react'
import { FirstName } from './Component1';
export default function Component5() {
    const fname = useContext(FirstName)
  return (
    <div>{fname}</div>
  )
}
