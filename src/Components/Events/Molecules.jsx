import React from 'react'
import hero from '/events/molecules.jpg'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle3 from '/events/circle3.png'
import circle2 from '/events/circle2.png'
import circle6 from '/events/circle6.png'
import xSpray from '/events/xSpray.png'
import image1 from '/events/molecules1.jpg'
import image2 from '/events/molecules2.jpg'
import image3 from '/events/molecules3.jpg'
import image4 from '/events/molecules4.jpg'
import { Link } from 'react-router-dom'


function Molecules() {
  return (
    <div>
      <img src={xSpray} className='xSprayEvent' alt="Molecules" />
      <Link to={'/events'}><p className='xEventDetail'>X</p></Link>
      
      <img src={hero} alt="Molecules" className='blancHero'/>
      <div className='stackContainerEvents stackContainerEventsSmall'>
        <div className='stackItem1 stackItemDesktop25'>
          <img className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
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
        <p className='titleSpatialDetail'>THE FACE - Escentric Molecules M+ launch Event</p>
        <div className='separatorEvents'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>THE FACE</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>FITZRROVIA</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>Partnering with the Face to launch the new Escentric Molecules M+
            range of fragrances, the Looney
            Studio was tasked with creating a
            truly immersive experience. <br />
            It being necessary to strip the
            space to a complete blank canvas,
            we leveled the floor and created a
            completely white space; visually
            influenced and colored by intricate
            lighting design and positioning of
            neon lights.
          </p>
          <p>
            Bespoke white pillars were filled into the space, appearing
            architecturally original. <br />
            Inside the pillars, we discreetly
            inserted perfume dispensers,
            dispensing the new fragrances. A
            white carpeted floor was the final addition to play with texture and
            appeal to all the senses.
          </p>
        </div>
      </div>
      <div>

        
        <div>
          <div className='spatialDetailImagesBoxPink moleculesDesktopBoxes'>
            <img src={image1} alt="Molecules" className='spatialDetailImage2 moleculesDesktopImg1'/>
            <img src={image2} alt="Molecules" className='spatialDetailImage1 moleculesDesktopImg2'/>
          </div>
          <div className='spatialDetailImagesBoxPink moleculesDesktopBoxes'>
            <img src={image3} alt="Molecules" className='spatialDetailImage1 moleculesDesktopImg3'/>
            <img src={image4} alt="Molecules" className='spatialDetailImage2'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Molecules