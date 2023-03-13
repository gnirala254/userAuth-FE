import './Header.css'
import React from 'react'

function Header() {

    const logout = () => {
        localStorage.clear();
        window.location.href = '/login'
    }

    return (
        <div className='header'>
            <button className='button' onClick={logout}>Log Out</button>
        </div>
    )
}

export default Header