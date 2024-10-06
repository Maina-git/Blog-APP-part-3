import React from 'react'
import "../styles/Register.scss"
import { useState } from 'react';
import { auth } from '../config/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  addDoc, doc, setDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../config/Firebase';

function Register({setIsAuth}){  
const [email, setEmail]=useState("");
const [password, setPassword]=useState("");
const [confirm, setConfirm]=useState("");
const [userName, setUserName]=useState("");
const [passerr, setPassErr]=useState(false);
const [err, setErr]=useState(false);

const signIn =async(e)=>{
  e.preventDefault();
try{
  await createUserWithEmailAndPassword(auth, email, password);
setIsAuth(true);
localStorage.setItem("isAuth", true);

await addDoc(collection(db, 'userInfo'),{
  email,
  userName,
  password,
  uid:user.uid
});
setUserName="",
setEmail="",
setPassword="",
setConfirm=""
}catch(err){
  setErr(true);
}
if(password !== confirm){
  setPassErr(true);
  setIsAuth(false);
  localStorage.clear();
}
}
return (
<div className="register">
<span className="registerTitle">Register</span>
<form  onSubmit={signIn}  className="registerForm">
  {
    passerr && <span>Password does not match</span>
  }
  {
    err && <span>Somehting went Wrong</span>
  }
<label htmlFor="username">UserName</label>
<input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}  placeHolder="Enter your Username" id="username"/>
<label htmlFor="Email">Email:</label>
<input type="email" onChange={(e)=>setEmail(e.target.value)} placeHolder="Enter yor Email" className="registerInput" id="email"/>
<label htmlFor="password">Password:</label>
<input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Password' className="registerInput" id="password"/>
<label htmlFor="confirm">Confirm Password:</label>
<input type="password" onChange={(e)=>setConfirm(e.target.value)} id="confirm" placeholder='Confirm Password' className="registerInput"/>
<button className="registerButton">Register</button>
</form>
<button type="submit" className="registerLoginButton">Login</button>
</div>
)
}
export default Register;
