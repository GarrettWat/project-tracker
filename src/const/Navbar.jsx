import React from 'react'
import Logo from './imgs/Logo.png'
import './styles/Navbar.css'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { getAuth } from 'firebase/auth'

function Navbar() {
    const auth = getAuth()
    const signOut =  () => {
        auth.signOut()
    }
    
    if(auth.currentUser) {
    return (
    <div className='nav'>
        <a href="/"><img src={Logo} alt="Logo" className='Logo'/></a>
        <ul className='list'>
            <a href="/signin" className='nav-links'><li>Sign </li></a>
        </ul>
    </div>
    )
    } else {
        return (
            <div className='nav'>
                <a href="/"><img src={Logo} alt="Logo" className='Logo'/></a>
                <ul className='list'>
                    <a href="/signin" className='nav-links'><li>Sign In</li></a>
                    <a href="/signup" className='nav-links'><li>Sign Up</li></a>
                </ul>
            </div>
            )
    }

}

export default Navbar