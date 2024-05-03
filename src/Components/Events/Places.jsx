import React from 'react'
import hero from '/events/placesHero.png'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle2 from '/events/circle2.png'
import circle3 from '/events/circle3.png'
import circle4 from '/events/circle4.png'
import circle5 from '/events/circle5.png'
import circle6 from '/events/circle6.png'
import xSpray from '/events/xSpray.png'
import image1 from '/events/places1.jpg'
import image2 from '/events/places2.png'
import image3 from '/events/places3.png'
import image5 from '/events/Warner23-5.jpg'
import image6 from '/events/Warner23-6.jpg'
import image7 from '/events/Warner23-7.jpg'
import image8 from '/events/Warner23-8.jpg'
import { Link } from 'react-router-dom'


function Places() {
  return (
    <div>
      <img src={xSpray} className='xSprayEvent' alt="" />
      <Link to={'/events'}><p className='xEventDetail'>X</p></Link>
      
      <img src={hero} alt="BENEFIT" className='blancHero'/>
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
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>PLACES + FACES</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>Shakespeare Globe</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
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
      </div>
      <div>
        <img src={image1} className="image1SpatialDetail placesImage1" />
        <div className='eventPlacesDetailImages'>
          <img src={image2} alt="" className='sezaneImages placesImages'/>
          <img src={image3} alt="" className='sezaneImages placesImages'/>
        </div>

      </div>
    </div>
  )
}

export default Places