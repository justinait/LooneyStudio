import React from 'react'
import hero from '/heroaux.png'
import sprayHero from '/AssetsHero.png'
import './Home.css'

function Home() {
  return (
    <div className='heroContainer'>
      <img src={hero} alt="Looney" className='heroImage' />
      {/* <p>DESIGN & BUILD</p>
      <img src={sprayHero} alt="" /> */}
    </div>
  )
}

export default Home