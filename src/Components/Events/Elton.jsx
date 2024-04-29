import React from 'react'
import hero from '/events/eltonHero.jpg'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle3 from '/events/circle3.png'
import circle4 from '/events/circle4.png'
import circle5 from '/events/circle5.png'
import xSpray from '/events/xSpray.png'
import image2 from '/events/elton2.jpg'
import image3 from '/events/elton3.jpg'
import { Link } from 'react-router-dom'


function Elton() {
  return (
    <div>
      <img src={xSpray} className='xSprayEvent' alt="" />
      <Link to={'/events'}><p className='xEventDetail'>X</p></Link>
      
      <img src={hero} alt="BENEFIT" className='blancHero'/>
      <div className='stackContainerEvents'>
        <div className='stackItemEvents'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItemEvents16'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>METALWORK</p>
        </div>
        <div className='stackItemEventsSmall2'>
          <img className='stackCircleImg' src={circle4} alt="" />
          <p className='stackText'>EVENT</p>
        </div>
        <div className='stackItem3'>
          <img className='stackCircleImg' src={circle5} alt="" />
          <p className='stackText'>SET BUILDING</p>
        </div>
        <div className='stackItemEventsLarge'>
          <img className='stackCircleImg' src={circle5} alt="" />
          <p className='stackText'>SPRAYING & FINISHING</p>
        </div>

          
      </div>
      <div className='colorSpaceEvents'>
        <p className='titleSpatialDetail'>WARNER MUSIC CHRISTMAS PARTY 23</p>
        <div className='separatorEvents'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>O2 Arena</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>O2 Arena</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>The O2 Arena’s marketing team sought
            our expertise to bring to life a
            captivating sculptural installation for
            Elton John’s highly anticipated farewell
            tour concert at the O2. Inspired by a pair
            of iconic glasses 
          </p>
          <p>
            provided by Elton
            John’s team, we embarked on crafting a
            remarkable 23ft wide metal frame,
            strategically rigged and installed at the
            entrance of the O2 Arena.
          </p>
        </div>
      </div>
      <div>

        <img src={hero} className="eltonDetailImage" />

        <p className='eventsDetailImagesText'>Behind the scenes</p>
        <div className='eltonDetailImagesBox'>
          <img src={image2} alt="warner" className='eltonDetailImage2' />
          <img src={image3} alt="warner" className='eltonDetailImage1' />
        </div>

      </div>
    </div>
  )
}

export default Elton