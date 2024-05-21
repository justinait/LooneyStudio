import React from 'react'
import hero from '/events/placesHero.png'
import heroDesktop from '/events/places.png'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle2 from '/events/circle2.png'
import circle3 from '/events/circle3.png'
import circle5 from '/events/circle5.png'
import circle6 from '/events/circle6.png'
import xSpray from '/events/xSpray.png'
import image1 from '/events/placesEditada.png'
import image2 from '/events/places2.png'
import image3 from '/events/places3.png'
import { Link } from 'react-router-dom'


function Places() {
  return (
    <div>
      
      <div className='arrowsContainer'>
        <Link to={'/wwe'} className='arrowsEvents'>{"<"}</Link>
        
        <img src={xSpray} className='xSprayEvent' alt="" />
        <Link to={'/events'}><p className='xTvDetail'>X</p></Link>
        
        <Link to={'/warner22'} className='arrowsEvents'>{">"}</Link>
      </div>

      <img src={hero} alt="PLACES + FACES" className='blancHero mobileOnlyPlaces'/>
      <img src={heroDesktop} alt="PLACES + FACES" className='blancHero tabletAndDesktop'/>

      <div className='stackContainerEvents stackContainerEventsSmall2'>
        <div className='stackItemEventsLarger2'>
          <img className='stackCircleImg circleImg16' src={circle1} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
        </div>
        <div className='stackItemEvents'>
          <img className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>CARPENTRY</p>
        </div>
        <div className='stackItemEventsLarger'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItemEvents11'>
          <img className='stackCircleImg' src={circle6} alt="" />
          <p className='stackText'>EVENT</p>
        </div>
        <div className='stackItemEvents'>
          <img className='stackCircleImg circleImg16' src={circle5} alt="" />
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
            <p>As the London-based streetwear brand Places+Faces 
              approachedits 10th anniversary in the fashion industry, we
            </p>
            <p>
              began our partnership
              with Guess Jeans to design
              photoshoot backdrops for the
              occasion.
            </p>
          </div>
          <div className='infoSpatialDetailTextContainer tabletAndDesktop'>
            <p>As the London-based streetwear brand Places+Faces 
              approachedits 10th anniversary in the fashion industry, we
              began our partnership
              with Guess Jeans to design
              photoshoot backdrops for the
              occasion.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={image1} className="placesImage1" />
        <div className='eventPlacesDetailImages'>
          <img src={image2} alt="Places + faces" className='sezaneImages placesImages'/>
          <img src={image3} alt="Places + faces" className='sezaneImages placesImages'/>
        </div>

      </div>
    </div>
  )
}

export default Places