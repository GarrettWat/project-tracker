import React from 'react'
import '../../styles/Signin.css'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signIn = async (e) => {
    e.preventDefault();
    console.log(email, password)
    await signInWithEmailAndPassword(auth, email, password)
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
        <h1>Sign In</h1>
            <input type="text" placeholder="Email" className='sign-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password" className='sign-input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className='sign-btn' onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Signin