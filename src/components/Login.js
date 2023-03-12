import './Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (event) => {
    event.preventDefault();
    console.log('form', email, password);
  }

  return (
    <div className='container'>
      <form onSubmit={handleLogin} className="form">
        <h1>Log In</h1>
        <input className='email' placeholder='Enter Email' type='text' onChange={(e) => { setEmail(e.target.value) }} />
        <input className='password' placeholder='Enter Password' type='password' onChange={(e) => { setPassword(e.target.value) }} />
        <button className='button'>Log In</button>
        <p>New User? <Link to="/sign-up">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login