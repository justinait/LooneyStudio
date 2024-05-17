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
        A Brixton-based <br /> <strong className='designAbout'>Design</strong> <strong className='and'>&</strong><br /> <strong className='constructionAbout'>Construction </strong> 
          company
        known for our dedication to turning our clients' ideas into reality, from start to finish.
      </p>
      <img src={spray} alt="" className='sprayAbout' />

      <div className='brandsSection'>

        <p className='subtitleAbout'>Selected clients</p>
        <div className='brandsAboutContainer'>
          <img className='brandIconAbout brandBig paddingBottom0' src={Amazon} alt="Amazon" />
          <img className='brandIconAbout' src={Panasonic} alt="Panasonic" />
          <img className='brandIconAbout' src={Samsung} alt="Samsung" />
          <img className='brandIconAbout brandBig' src={Sony} alt="Sony" />
          <img className='brandIconAbout brand13' src={Appletv} alt="Appletv" />

          <img className='brandIconAbout brandBig' src={Dazed} alt="Dazed" />
          <img className='brandIconAbout brandBig' src={BBC} alt="BBC" />
          <img className='brandIconAbout brandToBig' src={BB} alt="BB" />
          <img className='brandIconAbout brandBig' src={Google} alt="Google" />
          <img className='brandIconAbout' src={Essity} alt="Essity" />

          <img className='brandIconAbout brandBig' src={Gisou} alt="Gisou" />
          <img className='brandIconAbout brandToBig' src={hp} alt="hp" />
          <img className='brandIconAbout' src={Warner} alt="Warner" />
          <img className='brandIconAbout brandToBig' src={o2} alt="o2" />
          <img className='brandIconAbout' src={Benefit} alt="Benefit" />
        </div>
      </div>
    </div>
  )
}

export default About