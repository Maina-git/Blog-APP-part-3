import React from 'react'
import "../styles/Login.scss"

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
<form  className="loginForm">
<label htmlFor="Email">Email:</label>
<input type="email" placeholder='Enter your Email' className="loginInput" id="email"/>
<label htmlFor="password">Password:</label>
<input type="text" placeholder='Enter your Password' className="loginInput" id="password"/>
<button className="loginButton">Login</button>
</form>

<button className="loginRegisterButton">Register</button>
    </div>
  )
}

export default Login;
