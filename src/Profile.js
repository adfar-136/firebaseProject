import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from './Firbase'
import { useNavigate } from 'react-router-dom'

export default function Profile(props) {
    const navigate = useNavigate()
    const handleSignout =()=>{
        signOut(auth).then(()=>{
            navigate("/")
        })
    }
  return (
    <div>
        {props.user ? (
            <>
            <h1>Hello welcome to my website {props.user}</h1>
            <button onClick={handleSignout}>Signout</button>
            </>
        ) :(
          <div>
            <button onClick={()=>navigate("/login")}>Please Login First</button>
          </div>
        )}
    </div>
  )
}
