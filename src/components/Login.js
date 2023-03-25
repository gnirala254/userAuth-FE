import './Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('form', email, password);

    fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "loggedIN");
        if (data['status'] === 200) {
          window.localStorage.setItem('login-token', JSON.stringify(data['token']));
          window.localStorage.setItem('loggedIn', JSON.stringify('true'))
          window.location.href = '/home'
          setEmail('');
          setPassword('');
        }

      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  return (
    <div className='container'>
      <form onSubmit={handleLogin} className="form">
        <h1>Log In</h1>
        <input className='email' placeholder='Enter Email' type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <input className='password' placeholder='Enter Password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <button className='button'>Log In</button>
        <p>New User? <Link to="/sign-up">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login