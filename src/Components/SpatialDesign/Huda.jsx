import React from 'react'
import hero from '/spatial/hudahero.jpg'
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


function Huda() {
  return (
    <div>
        <img src={xSpray} className='xSpraySpatial' alt="" />
        <Link to={'/spatialDesign'}><p className='xSpatialDetail'>X</p></Link>
        
        <img src={hero} alt="BENEFIT" className='blancHero'/>
        <div className='stackContainer stackContainerPink'>
            <div className='stackItem2'>
                <img className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>CONCEPT DESIGN</p>
            </div>
            <div className='stackItemPink2'>
                <img className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItemPink3'>
                <img className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>METALWORK</p>
            </div>

            <div className='stackItem1'>
                <img className='stackCircleImg' src={circle6} alt="" />
                <p className='stackText'>INSTALLATION</p>
            </div>
            <div className='stackItem4'>
                <img className='stackCircleImg' src={circle4} alt="" />
                <p className='stackText'>POP UP</p>
            </div>
            <div className='stackItemPink3'>
                <img className='stackCircleImg' src={circle6} alt="" />
                <p className='stackText'>CARPENTRY</p>
            </div>
            
        </div>
      <div className='colorSpace'>
        <p className='titleSpatialDetail'>HUDA - Mercury Retrograde launch</p>
        <div className='separatorSpatial'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>Huda Beauty</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>POP UP MOB</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>Covent Garden</p>
          </div>
        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>Transforming Covent Garden's Piazza into a captivating space for a month, 
            we crafted an 18 x 10ft pop-up from scratch that transported visitors to 
            outer space. Drawing inspiration from the intricate facets of diamonds and 
            reimagining life on Mercury, we curated a metallic palette and incorporated 
            a mirror tunnel entrance, alongside a hidden mirror room that left
          </p>
          <p>
          visitors awe-struck. This ambitious design project featured a stunning crystal 
          facade constructed with bespoke welded metal frames, cutting-edge sound technology, 
          and a vibrant interior. It became a must-visit destination during the Christmas period, 
          offering passersby an immersive glimpse into the essence of Huda Beauty.
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
        <div className='spatialDetailImagesBenefit spatialDetailImagesGisou'>
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Huda