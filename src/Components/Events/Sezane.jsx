import React from 'react'
import hero from '/events/sezaneHero.jpg'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle3 from '/events/circle3.png'
import circle4 from '/events/circle6.png'
import circle5 from '/events/circle5.png'
import xSpray from '/events/xSpray.png'
import image2 from '/events/sezane1.jpg'
import image3 from '/events/sezane2.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeader from '/src/Components/ProjectsHeader/ProjectsHeader';

function Sezane() {
  return (
    <div>

      <ProjectsHeader />

      <LazyLoadImage src={hero} alt="SEZANE" className='blancHero'/>

      <div className='stackContainerEvents stackContainerEventsSmaller'>
        <div className='stackItemEventsLarge'>
          <LazyLoadImage className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
        </div>
        <div className='stackItemEventsLarger2'>
          <LazyLoadImage className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItemEventsSmall2'>
          <LazyLoadImage className='stackCircleImg' src={circle4} alt="" />
          <p className='stackText'>EVENT</p>
        </div>
        <div className='stackItemEventsLarger2'>
          <LazyLoadImage className='stackCircleImg' src={circle5} alt="" />
          <p className='stackText'>PROP MAKING</p>
        </div>

          
      </div>
      <div className='colorSpaceEvents'>
        <p className='titleSpatialDetail'>SEZANE - CHRISTMAS POP UP</p>
        <div className='separatorEvents'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>SEZANE</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>Backlash</p>
          </div>
          <div>
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>COVENT GARDEN</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>In collaboration with Backlash Creative agency, we embarked on a 
            journey to create a magical Christmas experience for Sezane brand 
            in the heart of Covent Garden. Building upon the brand’s holiday 
            theme, we curated an enchanting spectacle that transported visitors 
            into a scene straight out of a movie. Central to the display was a 
            meticulously customized red Mini Cooper,
          </p>
          <p>
          adorned with oversized presents and a festive Christmas garland, 
          which illuminated the night with its twinkling lights, captivating 
          passersby and providing the ideal backdrop for cherished Christmas 
          selfies.
          </p>
        </div>
      </div>
      <div>

        
        <div>
          <p className='eventsDetailImagesText'>Behind the scenes</p>
          <div className='eventDetailImagesBoxSezane'>
            <LazyLoadImage src={image2} alt="SEZANE" className='sezaneImages transformHero'/>
            <LazyLoadImage src={image3} alt="SEZANE" className='sezaneImages'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sezane