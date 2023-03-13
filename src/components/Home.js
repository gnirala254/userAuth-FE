import './Home.css'
import React from 'react'
import Header from './Header'

function Home() {
  return (
    <div>
      <Header />
      <div className='home'>Welcome to Home!</div>
    </div>
  )
}

export default Home