import React, { useState } from 'react'
import './Home.css'
import heroMobile from '/home/mobileHero.mp4'
import heroDesktop from '/home/desktopHero.mp4'
import { useLocation } from 'react-router-dom';

function Home() {
  
  const windowWidth = window.innerWidth;
  const [desktop, setDesktop] = (windowWidth <= 1200) ? useState(false): useState(true)
  const { pathname } = useLocation();

  return (
    <div className='heroContainer'>
      <video 
        className='heroVideo' 
        src={heroMobile}
        muted loop autoPlay playsInline >
      </video>
      <video 
        className='heroVideoDesktop' 
        src={heroDesktop}
        muted loop autoPlay playsInline>
      </video>
      <p className={pathname === '/' ?  ( desktop ? 'navbarLogoHome' : 'hideLogo'): 'hideLogo'}>THE LOONEY STUDIO</p>
      <p className='heroText'>DESIGN & BUILD</p>
      
    </div>
  )
}

export default Home