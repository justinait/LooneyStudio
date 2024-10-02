import React from 'react'
import './EventsDetail.css'
import hero from '../../assets/events/TOMDIXON.jpg'
import circle2 from '../../assets/events/circle2.png'
import circle3 from '../../assets/events/circle3.png'
import circle4 from '../../assets/events/circle4.png'
import xSpray from '../../assets/events/xSpray.png'
import image1 from '../../assets/events/dixon1.jpg'
import image2 from '../../assets/events/dixon2.jpg'
import image3 from '../../assets/events/dixon3.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeader from '/src/Components/ProjectsHeader/ProjectsHeader';

function Dixon() {
  return (
    <div>
      <ProjectsHeader/>
      
      <LazyLoadImage src={hero} alt="Dixon" className='blancHero'/>
      <div className='stackContainerEvents stackContainerEventsSmaller'>
        <div className='stackItemDestree1 stackItemDesktop40'>
          <LazyLoadImage className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>PROJECT MANAGEMENT</p>
        </div>
        <div className='stackItem1 stackItemDesktop25'>
          <LazyLoadImage className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItemEventsLarger'>
          <LazyLoadImage className='stackCircleImg' src={circle4} alt="" />
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
          <LazyLoadImage src={image1} alt="Dixon" className='' />
          <LazyLoadImage src={image2} alt="Dixon" className='' />
          <LazyLoadImage src={image3} alt="Dixon" className='' />
        </div>
      </div>
    </div>
  )
}

export default Dixon