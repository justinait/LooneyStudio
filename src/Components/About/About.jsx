import React from 'react'
import './About.css'
import spray from '/sprays/aboutSpray.png'
import Amazon from '/brands/Logo-Amazon.png'
import Panasonic from '/brands/Logo-Panasonic.png'
import Samsung from '/brands/Logo-Samsung.png'
import Sony from '/brands/Logo-Sony.png'
import Appletv from '/brands/Logo-Appletv.png'
import Dazed from '/brands/Logo-Dazed.png'
import BBC from '/brands/Logo-BBC.png'
import BB from '/brands/Logo-BB.png'
import Google from '/brands/Logo-Google.png'
import Essity from '/brands/Logo-Essity.png'
import Gisou from '/brands/Logo-Gisou.png'
import hp from '/brands/Logo-hp.png'
import Warner from '/brands/Logo-Warner.png'
import o2 from '/brands/Logo-o2.png'
import Benefit from '/brands/Logo-Benefit.png'

function About() {
  return (
    <div className='aboutContainer'>
      <p className='aboutText'>
        A Brixton-based <br /> <strong className='designAbout'>Design</strong> <strong className='and'>&</strong><br /> <strong>Construction </strong> 
          company
        known for our dedication to turning our clients' ideas into reality, from start to finish.
      </p>
      <img src={spray} alt="" className='sprayAbout' />

      <div className='brandsSection'>

        <p className='subtitleAbout'>Selected clients</p>
        <div className='brandsAboutContainer'>
          <img className='brandIconAbout brandBig paddingBottom0' src={Amazon} alt="" />
          <img className='brandIconAbout' src={Panasonic} alt="" />
          <img className='brandIconAbout' src={Samsung} alt="" />
          <img className='brandIconAbout brandBig' src={Sony} alt="" />
          <img className='brandIconAbout brand13' src={Appletv} alt="" />

          <img className='brandIconAbout brandBig' src={Dazed} alt="" />
          <img className='brandIconAbout brandBig' src={BBC} alt="" />
          <img className='brandIconAbout brandToBig' src={BB} alt="" />
          <img className='brandIconAbout brandBig' src={Google} alt="" />
          <img className='brandIconAbout' src={Essity} alt="" />

          <img className='brandIconAbout brandBig' src={Gisou} alt="" />
          <img className='brandIconAbout brandToBig' src={hp} alt="" />
          <img className='brandIconAbout' src={Warner} alt="" />
          <img className='brandIconAbout brandToBig' src={o2} alt="" />
          <img className='brandIconAbout' src={Benefit} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About