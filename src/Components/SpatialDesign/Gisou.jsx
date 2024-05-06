import React from 'react'
import hero from '/spatial/Gisouhero.jpg'
import './SpatialDesign.css'
import circle1 from '/spatial/circle1.png'
import circle2 from '/spatial/circle2.png'
import circle3 from '/spatial/circle3.png'
import circle4 from '/spatial/circle4.png'
import circle6 from '/spatial/circle6.png'
import circle8 from '/spatial/circle8.png'
import circle9 from '/spatial/circle9.png'
import xSpray from '/spatial/xSpray.png'
import image1 from '/spatial/Gisou1.jpg'
import image2 from '/spatial/Gisou2.jpg'
import image3 from '/spatial/Gisou3.jpg'
import image4 from '/spatial/Gisou4.jpg'
import image5 from '/spatial/Gisou5.jpg'
import { Link } from 'react-router-dom'


function Gisou() {
  return (
    <div>
        <img src={xSpray} className='xSpraySpatial' alt="" />
        <Link to={'/spatialDesign'}><p className='xSpatialDetail'>X</p></Link>
        
        <img src={hero} alt="BENEFIT" className='blancHero'/>
        <div className='stackContainer stackContainerPink'>
            <div className='stackItemPink2'>
                <img className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItem1'>
                <img className='stackCircleImg' src={circle6} alt="" />
                <p className='stackText'>INSTALLATION</p>
            </div>
            <div className='stackItemPink3 stackItemDesktop10'>
                <img className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>METALWORK</p>
            </div>

            <div className='stackItem1'>
                <img className='stackCircleImg' src={circle4} alt="" />
                <p className='stackText'>POP UP</p>
            </div>
            <div className='stackItemPink3 stackItemDesktop10'>
                <img className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>CARPENTRY</p>
            </div>
            <div className='stackItemDestree3'>
            <img className='stackCircleImg' src={circle1} alt="" />
            <p className='stackText'>LIGHTING DESIGN</p>
            </div>
            
        </div>
      <div className='colorSpace'>
        <p className='titleSpatialDetail'>Gisou Holiday Pop Up</p>
        <div className='separatorSpatial'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>Gisou</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>POP UP MOB</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>Picadilly Circus</p>
          </div>
        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>Drawing inspiration from Gisou's golden hue and the 
            powerful essence of Mirsalehi Honey products, we embraced 
            the enchanting glow theme throughout the entire project. 
            Despite the time constraints and the bustling holiday season, 
            we undertook a remarkable transformation of the Victorian 
            building at 189 Piccadilly.  
          </p>
          <p>
            With meticulous attention to detail, we incorporated organic shapes and curated a 
            bespoke color palette that harmoniously reflected the brand's 
            honey-inspired identity. Every aspect of the pop-up was thoughtfully 
            crafted to immerse visitors in an unforgettable Gisou experience.
          </p>
        </div>
      </div>
      <div>
        <div className='spatialDetailImagesBoxBenefit1'>
          <img src={image1} alt="benefit" className='' />
          <img src={image2} alt="benefit" className='' />
          <img src={image3} alt="benefit" className='' />
        </div>

        <p className='spatialDetailImagesText'>Behind the scenes</p>
        <div className='spatialDetailImagesBenefit'>
          <img src={image4} alt="" className='spatialDetailGisouImg blanc2 transformHero gisouFixedImg' />
          <img src={image5} alt="" className='spatialDetailGisouImg blanc1' />
        </div>
      </div>
    </div>
  )
}

export default Gisou