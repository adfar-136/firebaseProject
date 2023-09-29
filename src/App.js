import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import SIgnup from './Components/Signup/SIgnup'
import Profile from './Profile'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firbase'

export default function App() {
 const [user,setUser] = useState();
 useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){
      setUser(user.displayName)
    }
    else{
      setUser("")
    }
  })
 })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path ="/signup" element = {<SIgnup/>}/> 
          <Route path='/profile' element={<Profile user={user}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
