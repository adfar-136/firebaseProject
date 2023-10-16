import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <li><Link to="/login" target='_blank'>Login</Link></li>
        <li><Link to="/signup" target='_blank'>Signup</Link></li>
    </div>
  )
}
