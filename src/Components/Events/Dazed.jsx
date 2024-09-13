import React from 'react'
import hero from '/events/dazedHero.jpeg'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle3 from '/events/circle3.png'
import circle2 from '/events/circle2.png'
import circle6 from '/events/circle6.png'
import xSpray from '/events/xSpray.png'
import image1 from '/events/dazed1.jpeg'
import image2 from '/events/dazed2.jpg'
import image3 from '/events/dazed3.jpeg'
import image4 from '/events/dazed4.jpeg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeader from '/src/Components/ProjectsHeader/ProjectsHeader';

function Dazed() {
  return (
    <div>
      <ProjectsHeader />

      <LazyLoadImage src={hero} alt="dazed" className='blancHero mobileOnly'/>
      <LazyLoadImage src={image4} alt="dazed" className='blancHero desktopOnly'/>

      <div className='stackContainerEvents stackContainerEventsSmall'>
        <div className='stackItemPink3'>
          <img className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>METAL WORK</p>
        </div>
        <div className='stackItemPink3'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItemEvents'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>CARPENTRY</p>
        </div>
        <div className='stackItemEvents'>
          <img className='stackCircleImg' src={circle6} alt="" />
          <p className='stackText'>PROP MAKING</p>
        </div>
      </div>
      <div className='colorSpaceEvents'>
        <p className='titleSpatialDetail'>Nothing x Dazed - LAUNCH EVENT</p>
        <div className='separatorEvents'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>DAZED</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>SHOREDITCH</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>The events team at Dazed contacted us once more to build
            an unforgettable night for their guests. This time, Dazed teamed up with London’s exciting new
            consumer tech brand Nothing on
            an event to celebrate their
            newest audio launch Ear (stick).    <br />
            The event was held in one of
            Hackney’s best-hidden gems,
            Night Tales Loft (NT’s). The intimate club and terrace bar
            overlooks the east London
            skyline, but the view was the last
            thing on anyone’s mind as two

          </p>
          <p>
          custom-designed arcade claw
            machines on the balcony took
            centre stage. We created
            corrugated metallic partitions
            which help not only to break up
            the space creating more private
            areas but also as a backdrop for
            the guests to get their best
            pictures taken. Another of our
            creations was the bespoke
            rotating plinths we designed to get the new Nothing Phone (1)
            the attention it deserved.
          </p>
        </div>
      </div>
      <div>

        <div className='mobileOnly'>
          <div className='spatialDetailImagesBoxPink'>
            <LazyLoadImage src={image2} alt="dazed" className='spatialDetailImage2'/>
            <LazyLoadImage src={image1} alt="dazed" className='spatialDetailImage1'/>
          </div>
          <div className='spatialDetailImagesBoxPink'>
            <LazyLoadImage src={image3} alt="dazed" className='spatialDetailImage1'/>
            <LazyLoadImage src={image4} alt="dazed" className='spatialDetailImage2'/>
          </div>
        </div>
        
        <div className='eventDetailImagesBoxSezane desktopOnly'>
          <LazyLoadImage src={image1} alt="dazed" className='dazedImagesDesktop' />
          <LazyLoadImage src={image2} alt="dazed" className='dazedImagesDesktop' />
          <LazyLoadImage src={image3} alt="dazed" className='dazedImagesDesktop' />
        </div>

      </div>
    </div>
  )
}

export default Dazed