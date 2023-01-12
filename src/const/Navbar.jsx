import React from 'react'
import Logo from './imgs/Logo.png'
import './styles/Navbar.css'


function Navbar() {
  return (
    <div className='nav'>
        <a href="/"><img src={Logo} alt="Logo" className='Logo'/></a>
        <ul className='list'>
            <a href="/signin" className='nav-links'><li>Sign In</li></a>
        </ul>
    </div>
    )
}

export default Navbar