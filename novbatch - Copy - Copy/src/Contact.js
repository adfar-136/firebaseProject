import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>Contact component
        <h1>Parent component</h1>
        <Outlet/>
    </div>
  )
}
