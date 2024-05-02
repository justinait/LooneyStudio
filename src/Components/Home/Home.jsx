import React from 'react'
import './Home.css'
import heroMobile from '/public/home/mobileHero.mp4'

function Home() {
  return (
    <div className='heroContainer'>
      <video 
        className='heroVideo' 
        src={heroMobile}
        muted loop autoPlay >
      </video>
      <p className='heroText'>DESIGN & BUILD</p>
      
    </div>
  )
}

export default Home