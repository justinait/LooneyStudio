import React from 'react'
import hero from '/events/TOMDIXON.jpg'
import './EventsDetail.css'
import circle2 from '/events/circle2.png'
import circle3 from '/events/circle3.png'
import circle4 from '/events/circle4.png'
import xSpray from '/events/xSpray.png'
import image1 from '/events/dixon1.jpg'
import image2 from '/events/dixon2.jpg'
import image3 from '/events/dixon3.jpg'
import { Link } from 'react-router-dom'


function Dixon() {
  return (
    <div>
      <img src={xSpray} className='xSprayEvent' alt="" />
      <Link to={'/events'}><p className='xEventDetail'>X</p></Link>
      
      <img src={hero} alt="BENEFIT" className='blancHero'/>
      <div className='stackContainerEvents stackContainerEventsSmaller'>
        <div className='stackItemDestree1 stackItemDesktop40'>
          <img className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>PROJECT MANAGEMENT</p>
        </div>
        <div className='stackItem1 stackItemDesktop25'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItemEventsLarger'>
          <img className='stackCircleImg' src={circle4} alt="" />
          <p className='stackText'>POP UP</p>
        </div>

          
      </div>
      <div className='colorSpaceEvents'>
        <p className='titleSpatialDetail'>TOM DIXON - DESIGN WEEK 2018</p>
        <div className='separatorEvents'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>HARRY’S X <br className='breakMobileAndTablet'  /> TOM DIXON</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>Pop Up Mob</p>
          </div>
          <div>
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>Coals Drop Yard</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>
          Touchy-smelly-feely-noisy-tasty was Tom Dixon’s theme for London 
          Design Week, where his space became a multi-sensory lab with 
          interactive installations, workshops, and talks inspired by the 
          five senses and how they shape the future of design. <br />
          </p>
          <p>
          In collaboration with US Pop Up Mob strategy team, we converted 
          one of the designer’s shop arches into the Razor Bar for the 
          entire week. 
          Open to the public and also by-invitation grooming services 
          along with design workshops and events were hosted at the Razor Bar.
          </p>
        </div>
      </div>
      <div>

        <div className='spatialDetailImagesBoxBenefit1'>
          <img src={image1} alt="benefit" className='' />
          <img src={image2} alt="benefit" className='' />
          <img src={image3} alt="benefit" className='' />
        </div>
      </div>
    </div>
  )
}

export default Dixon