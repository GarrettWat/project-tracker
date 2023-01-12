import React from 'react'
import '../../styles/Signin.css'
import { useState, useEffect } from 'react'
import { auth } from '../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'






function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredenial) => {
          console.log(userCredenial)
          })
          .catch((error) => {
            console.log(error)
          }
        )
      }


    return (
        <div className='sign-back'>
            <h1>Sign Up</h1>
                <input type="text" placeholder="Email" className='sign-input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password" className='sign-input'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className='sign-btn' onClick={signUp}>Sign Up</button>
        </div>
      )
}

export default Signup