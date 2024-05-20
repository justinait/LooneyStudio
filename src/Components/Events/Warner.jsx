import React from 'react'
import hero from '/events/Warner23-1.jpg'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle2 from '/events/circle2.png'
import circle3 from '/events/circle3.png'
import circle4 from '/events/circle6.png'
import circle5 from '/events/circle5.png'
import xSpray from '/events/xSpray.png'
import image2 from '/events/Warner23-2.jpg'
import image3 from '/events/Warner23-3.jpg'
import image4 from '/events/Warner23-4.jpg'
import image5 from '/events/Warner23-5.jpg'
import image6 from '/events/Warner23-10.jpg'
import image7 from '/events/Warner23-7.jpg'
import image8 from '/events/Warner23-8.jpg'
import { Link } from 'react-router-dom'


function Warner() {
  return (
    <div>
      <img src={xSpray} className='xSprayEvent' alt="" />
      <Link to={'/events'}><p className='xEventDetail'>X</p></Link>
      
      <img src={hero} alt="WARNER" className='blancHero'/>
      <div className='stackContainerEvents'>
        <div className='stackItemEventsLarger'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
        </div>
        <div className='stackItemEventsLarge'>
          <img className='stackCircleImg' src={circle2} alt="" />
          <p className='stackText'>PROJECT MANAGEMENT</p>
        </div>
        <div className='stackItemEvents'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItemEvents9'>
          <img className='stackCircleImg' src={circle4} alt="" />
          <p className='stackText'>EVENT</p>
        </div>
        <div className='stackItemEvents'>
          <img className='stackCircleImg' src={circle5} alt="" />
          <p className='stackText'>PROP MAKING</p>
        </div>

          
      </div>
      <div className='colorSpaceEvents'>
        <p className='titleSpatialDetail'>WARNER MUSIC CHRISTMAS PARTY 23</p>
        <div className='separatorEvents'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>Warner Music</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>The Standard Hotel</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>Inspired by the 70s essence of Decimo restaurant itself, we embarked on a
            creative endeavor to elevate the atmosphere of the venue for the Warner
            Music end-of-year party into an
            unforgeable experience. Spanning the
            entire space, a captivating ceiling
            installation stretched across the venue,
            seing the stage for an evening of
            unparalleled excitement. <br />
            A striking 50-foot suspended
            installation guided guests into the heart
            of the dance 
          </p>
          <p>
            floor, where our bespoke DJ booth awaited, graced by acclaimed
            artists like Mike Skinner from The
            Streets. <br />
            Dominating the scene, a colossal floating W logo
            served as a beacon of aention, adding a touch of
            grandeur to the ambiance. Stealing the spotlight, a
            magnificent 6-foot robot, meticulously crafted from
            fiberglass, took center stage, captivating guests with its extraterrestrial allure, ensuring a night to
            remember.
          </p>
        </div>
      </div>
      <div>
        <div className='spatialDetailImagesBoxBenefit1'>
          <img src={image2} alt="warner" className='' />
          <img src={image3} alt="warner" className='' />
          <img src={image4} alt="warner" className='' />
        </div>

        <img src={image5} className="spatialDetailImageWarner" />

        <p className='eventsDetailImagesText threeImages'>Behind the scenes</p>
        <div className='spatialDetailImagesBoxBenefit1'>
          <img src={image6} alt="warner" className='' />
          <img src={image7} alt="warner" className='' />
          <img src={image8} alt="warner" className='' />
        </div>

      </div>
    </div>
  )
}

export default Warner