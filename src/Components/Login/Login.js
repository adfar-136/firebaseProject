import React, { useState } from 'react'
import Inputform from '../InputForm/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./logijn.module.css"
import {auth} from "../../Firbase";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    email:"",
    password:""
})
const [errMsg,setErrMsg]= useState("")
const handleLogin = ()=>{
  if(!values.email || !values.password){
    setErrMsg("Please fill all the fields");
    return;
  }
  setErrMsg("");
  signInWithEmailAndPassword(auth,values.email,values.password).then((res)=>{
    navigate("/profile")
  }).catch((err)=>{
    setErrMsg(err.message)
  })
}
  return (
    <div className={styles.container}>
        <div className={styles["signup-form"]}>
            <h1 className={styles.heading}>Login Page</h1>
          
            <Inputform label="Email" type="email" placeholder="Enter Your Email"
            onChange={(e)=>
                setValues((prev)=>({...prev,email:e.target.value}))}/>
            <Inputform label="Password" type="password" placeholder="Enter Your Password"
            onChange={(e)=>
                setValues((prev)=>({...prev,password:e.target.value}))}/>
            <div className={styles.footer}>
                <b className={styles.error}>{errMsg}</b>
                <button onClick={handleLogin}>Login</button>
                <div className={styles.account}>
                    <p>Already have an account?</p>
                    <span>
                        <Link  to="/signup">SignUp</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
