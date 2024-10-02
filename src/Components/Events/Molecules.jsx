import React from 'react'
import './EventsDetail.css'
import hero from '../../assets/events/molecules.jpg'
import circle1 from '../../assets/events/circle1.png'
import circle3 from '../../assets/events/circle3.png'
import circle2 from '../../assets/events/circle2.png'
import circle6 from '../../assets/events/circle6.png'
import xSpray from '../../assets/events/xSpray.png'
import image1 from '../../assets/events/molecules1.jpg'
import image2 from '../../assets/events/molecules2.jpg'
import image3 from '../../assets/events/molecules3.jpg'
import image4 from '../../assets/events/molecules4.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeader from '/src/Components/ProjectsHeader/ProjectsHeader';

function Molecules() {
  return (
    <div>
      
      <ProjectsHeader/>

      <LazyLoadImage src={hero} alt="Molecules" className='blancHero'/>
      <div className='stackContainer stackContainerDestree'>
        
        <div className='stackItemPink3 stackItemDesktop15'>
          <LazyLoadImage className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItem1'>
          <LazyLoadImage className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>CARPENTRY</p>
        </div>
        <div className='stackItem1'>
          <LazyLoadImage className='stackCircleImg' src={circle6} alt="" />
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
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>GALLERY DIFFERENT - FITZROVIA</p>
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
            <LazyLoadImage src={image1} alt="Molecules" className='spatialDetailImage2 moleculesDesktopImg1'/>
            <LazyLoadImage src={image2} alt="Molecules" className='spatialDetailImage1 moleculesDesktopImg2'/>
          </div>
          <div className='spatialDetailImagesBoxPink moleculesDesktopBoxes'>
            <LazyLoadImage src={image3} alt="Molecules" className='spatialDetailImage1 moleculesDesktopImg3'/>
            <LazyLoadImage src={image4} alt="Molecules" className='spatialDetailImage2'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Molecules