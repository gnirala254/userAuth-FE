import './SignUp.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignUp = (event) => {
    event.preventDefault();
    console.log('form', name, email, password);

    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data['status'] == 201) {
          console.log('clearing...');
          setName('');
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
      <form onSubmit={handleSignUp} className="form">
        <h1>Sign Up</h1>
        <input className='name' placeholder='Enter Name' type='text' onChange={(e) => { setName(e.target.value) }} />
        <input className='email' placeholder='Enter Email' type='text' onChange={(e) => { setEmail(e.target.value) }} />
        <input className='password' placeholder='Enter Password' type='password' onChange={(e) => { setPassword(e.target.value) }} />
        <button className='button'>Sign Up</button>
        <p>Already Have an Account? <Link to="/login">Log In</Link></p>
      </form>
    </div>
  )
}

export default SignUp