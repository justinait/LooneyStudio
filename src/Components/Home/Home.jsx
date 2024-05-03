import React from 'react'
import './Home.css'
import heroMobile from '/home/mobileHero.mp4'
import heroDesktop from '/home/desktopHero.mp4'

function Home() {
  return (
    <div className='heroContainer'>
      <video 
        className='heroVideo' 
        src={heroMobile}
        muted loop autoPlay >
      </video>
      <video 
        className='heroVideoDesktop' 
        src={heroDesktop}
        muted loop autoPlay >
      </video>
      <p className='heroText'>DESIGN & BUILD</p>
      
    </div>
  )
}

export default Home