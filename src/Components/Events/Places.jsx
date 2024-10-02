import React from 'react'
import './EventsDetail.css'
import hero from '../../assets/events/placesHero.png'
import heroDesktop from '../../assets/events/places.png'
import circle1 from '../../assets/events/circle1.png'
import circle2 from '../../assets/events/circle2.png'
import circle3 from '../../assets/events/circle3.png'
import circle5 from '../../assets/events/circle5.png'
import circle6 from '../../assets/events/circle6.png'
import xSpray from '../../assets/events/xSpray.png'
import image1 from '../../assets/events/placesEditada.png'
import image2 from '../../assets/events/places2.png'
import image3 from '../../assets/events/places3.png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeader from '/src/Components/ProjectsHeader/ProjectsHeader';

function Places() {
  return (
    <div>
      
      <ProjectsHeader />

      <LazyLoadImage src={hero} alt="PLACES + FACES" className='blancHero mobileOnlyPlaces'/>
      <LazyLoadImage src={heroDesktop} alt="PLACES + FACES" className='blancHero tabletAndDesktop'/>

      <div className='stackContainerEvents stackContainerEventsSmall2'>
        <div className='stackItemEventsLarger2'>
          <LazyLoadImage className='stackCircleImg circleImg16' src={circle1} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
        </div>
        <div className='stackItemEvents'>
          <LazyLoadImage className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>CARPENTRY</p>
        </div>
        <div className='stackItemEventsLarger'>
          <LazyLoadImage className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItemEvents11'>
          <LazyLoadImage className='stackCircleImg' src={circle6} alt="" />
          <p className='stackText'>EVENT</p>
        </div>
        <div className='stackItemEvents'>
          <LazyLoadImage className='stackCircleImg circleImg16' src={circle5} alt="" />
          <p className='stackText'>PROP MAKING</p>
        </div>
      </div>

      <div className='colorSpaceEvents'>
        <p className='titleSpatialDetail'>PLACES + FACES - 10TH YEAR ANNIVERSARY EVENT</p>
        <div className='separatorEvents'></div>
        <div className='colorSpaceInformation'>
          <div className='infoContainerSpatialDetail'>
            <div>
              <p className='infoTitleSpatialDetail'>CLIENT</p>
              <p className='infoDataSpatialDetail'>PLACES + FACES</p>
            </div>

            <div>
              <p className='infoTitleSpatialDetail'>LOCATION</p>
              <p className='infoDataSpatialDetail'>Shakespeare Globe</p>
            </div>

          </div>
          <div className='infoSpatialDetailTextContainer mobileOnlyPlaces'>
            <p>As the London-based streetwear
              brand Places+Faces approached
              its 10th anniversary in the fashion
              industry, we began our partnership
              with Guess Jeans to design
              photoshoot backdrops for the
              occasion.
            </p>
            <p>
              The two stages, one prom-picture-perfect, and the
              other including a love-seat of
              recycled jeans from the Guess
              archives, were displayed at
              Shakespeare’s Globe Theatre in
              2023.
            </p>
          </div>
          <div className='infoSpatialDetailTextContainer tabletAndDesktop'>
            <p>As the London-based streetwear brand Places+Faces 
              approachedits 10th anniversary in the fashion industry, we
              began our partnership
              with Guess Jeans to design
              photoshoot backdrops for the
              occasion. <br />
              The two stages, one prom-picture-perfect, and the
              other including a love-seat of
              recycled jeans from the Guess
              archives, were displayed at
              Shakespeare’s Globe Theatre in
              2023.
            </p>
          </div>
        </div>
      </div>
      <div>
        <LazyLoadImage src={image1} className="placesImage1" />
        <div className='eventPlacesDetailImages'>
          <LazyLoadImage src={image2} alt="Places + faces" className='sezaneImages placesImages'/>
          <LazyLoadImage src={image3} alt="Places + faces" className='sezaneImages placesImages'/>
        </div>

      </div>
    </div>
  )
}

export default Places