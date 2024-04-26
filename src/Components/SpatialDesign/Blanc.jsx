import React from 'react'
import hero from '/spatial/1664.jpg'
import './SpatialDesign.css'
import circle1 from '/spatial/circle1.png'
import circle2 from '/spatial/circle2.png'
import circle3 from '/spatial/circle3.png'
import circle4 from '/spatial/circle4.png'
import circle5 from '/spatial/circle5.png'
import circle6 from '/spatial/circle6.png'
import circle7 from '/spatial/circle7.png'
import xSpray from '/spatial/xSpray.png'
import image1 from '/spatial/16641.jpg'
import image2 from '/spatial/16642.jpg'
import image3 from '/spatial/16643.jpg'
import { Link } from 'react-router-dom'


function Blanc() {
  return (
    <div>
        <img src={xSpray} className='xSpraySpatial' alt="" />
        <Link to={'/spatialDesign'}><p className='xSpatialDetail'>X</p></Link>
        
        <img src={hero} alt="1664 Blanc" className='blancHero'/>
        <div className='stackContainer'>
            <div className='stackItem1'>
                <img className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>CONCEPT DESIGN</p>
            </div>
            <div className='stackItem2'>
                <img className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItem3'>
                <img className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>CARPENTRY</p>
            </div>
            <div className='stackItem4'>
                <img className='stackCircleImg' src={circle4} alt="" />
                <p className='stackText'>POP UP</p>
            </div>
            <div className='stackItem1'>
                <img className='stackCircleImg' src={circle5} alt="" />
                <p className='stackText'>LIGHTING DESIGN</p>
            </div>
            <div className='stackItem4'>
                <img className='stackCircleImg' src={circle6} alt="" />
                <p className='stackText'>INSTALLATION</p>
            </div>
            <div className='stackItem3'>
                <img className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>METAL WORK</p>
            </div>
            <div className='stackItem2'>
                <img className='stackCircleImg' src={circle7} alt="" />
                <p className='stackText'>SPRYING & FINISHING</p>
            </div>
            
        </div>
        <div className='colorSpace'>
            <p className='titleSpatialDetail'>1664 BLANC - LND FASHION WEEK POP UP</p>
            <div className='separatorSpatial'></div>
            <div className='infoContainerSpatialDetail'>
                <div>
                    <p className='infoTitleSpatialDetail'>CLIENT</p>
                    <p className='infoDataSpatialDetail'>1664 KRONENBERG</p>
                </div>

                <div>
                    <p className='infoTitleSpatialDetail'>AGENCY</p>
                    <p className='infoDataSpatialDetail'>GUNGA & <br />STUDIO STILTON</p>
                </div>

                <div>
                    <p className='infoTitleSpatialDetail'>LOCATION</p>
                    <p className='infoDataSpatialDetail'>SELFRIDGES</p>
                </div>
            </div>

        </div>
        <div>
            <img src={image1} alt="stand 1664" className='image1SpatialDetail' />
            <p className='spatialDetailImagesText'>Behind the scenes</p>
            <div className='spatialDetailImages'>
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Blanc