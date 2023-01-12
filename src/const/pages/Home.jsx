import React from 'react'
import '../styles/Home.css'
import homepageimg from '../imgs/homepageimg.svg'
function Home() {
  return (
    <div className='main-box'>
        <div className='home-txt'>
            <h1 className='home-intxt'>Never <strong>Forget</strong> your work again!</h1>
            <h4 className='home-intxt'>Keep Track of them here!</h4>
        </div>
        <div className='home-img-box'>
            <img src={homepageimg} alt="Home Page Image" className='home-img'/>
        </div>
    </div>
  )
}

export default Home