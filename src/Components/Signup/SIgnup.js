import React, { useState } from 'react'
import Inputform from '../InputForm/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./signup.module.css";
import {auth} from "../../Firbase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
export default function SIgnup() {
    const navigate = useNavigate();
    const [btnDisabled,setBtnDisabled] = useState(false);
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:""
    })
    const [errMsg,setErrMsg]= useState("")
    const handleSubmission =()=>{
      if(!values.name || !values.email || !values.password){
        setErrMsg("Please fill all the fields");
        return;
      }
      setErrMsg("");
      setBtnDisabled(true)
      createUserWithEmailAndPassword(auth,values.email,values.password).then((res)=>{
        const user = res.user;
        console.log(user);
        updateProfile(user,{
            displayName:values.name,
        });
        navigate("/login");
      }).catch((err)=>{
        setErrMsg(err.message)
        setBtnDisabled(false)
      })
    }
  return (
    <div className={styles.container}>
        <div className={styles["signup-form"]}>
            <h1 className={styles.heading}>Signup Page</h1>
            <Inputform label="Name" type="text" placeholder="Enter Your Name"
            onChange={(e)=>
            setValues((prev)=>({...prev,name:e.target.value}))}/>
            <Inputform label="Email" type="email" placeholder="Enter Your Email"
            onChange={(e)=>
                setValues((prev)=>({...prev,email:e.target.value}))}/>
            <Inputform label="Password" type="password" placeholder="Enter Your Password"
            onChange={(e)=>
                setValues((prev)=>({...prev,password:e.target.value}))}/>
            <div className={styles.footer}>
                <b className={styles.error}>{errMsg}</b>
                <button onClick={handleSubmission} disabled={btnDisabled}>SignUp</button>
                <div className={styles.account}>
                    <p>Already have an account?</p>
                    <span>
                        <Link  to="/login">Login</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
