import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home2() {
  return (
    <div>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/about">About</NavLink><br />
        <NavLink to="/contact">Contact</NavLink><br />
        <Outlet/>
    </div>
  )
}
