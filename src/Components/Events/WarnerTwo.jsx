import React from 'react'
import hero from '/events/Warner22Hero.png'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle2 from '/events/circle2.png'
import circle3 from '/events/circle3.png'
import circle6 from '/events/circle6.png'
import circle5 from '/events/circle5.png'
import xSpray from '/events/xSpray.png'
import image1 from '/events/Warner22.png'
import image2 from '/events/Warner22-2.png'
import image3 from '/events/Warner22-3.png'
import image4 from '/events/Warner22-4.jpg'
import image5 from '/events/Warner22-5.jpg'
import { Link } from 'react-router-dom'


function WarnerTwo() {
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
            <p className='infoDataSpatialDetail'>WARNER</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>The Standard Hotel</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>We embarked on creating a surreal 12ft Christmas tree 
            sculpture using bespoke oversized Christmas baubles, 
            along with a customized photo booth featuring a whimsical 
            optical room. The event took place at Decimo, the hotel's 
            Michelin-starred restaurant. Drawing inspiration from the 
            restaurant's distinctive Mexican and Brazilian Mid Century 
            design, we carefully selected a color palette that 
            complemented 
          </p>
          <p>
          the existing ambiance, evoking a warm, earthy atmosphere 
          while infusing vibrant and funky metallic tones to 
          establish a festive party environment. To further enhance 
          the space, we introduced bamboo curtains adorned with the 
          iconic Warner's logo, seamlessly blending with the existing 
          macrame curtains.
          </p>
        </div>
      </div>
      <div>
        <div className='spatialDetailImagesBoxBenefit1'>
          <img src={image1} alt="benefit" className='' />
          <img src={image2} alt="benefit" className='' />
          <img src={image3} alt="benefit" className='' />
        </div>

        <p className='eventsDetailImagesText'>Behind the scenes</p>
        <div className='eventPlacesDetailImages'>
            <img src={image4} alt="" />
            <img src={image5} alt="" />
        </div>

      </div>
    </div>
  )
}

export default WarnerTwo