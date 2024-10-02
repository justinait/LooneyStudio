import React from 'react'
import './SpatialDesign.css'
import hero from '../../assets/spatial/1664.jpg'
import circle1 from '../../assets/spatial/circle1.png'
import circle2 from '../../assets/spatial/circle2.png'
import circle3 from '../../assets/spatial/circle3.png'
import circle4 from '../../assets/spatial/circle4.png'
import circle5 from '../../assets/spatial/circle5.png'
import circle6 from '../../assets/spatial/circle6.png'
import circle7 from '../../assets/spatial/circle7.png'
import xSpray from '../../assets/spatial/xSpray.png'
import image1 from '../../assets/spatial/16641.jpg'
import image2 from '../../assets/spatial/1664-2.jpg'
import image3 from '../../assets/spatial/1664-3.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeaderSpatial from '/src/Components/ProjectsHeader/ProjectsHeaderSpatial';

function Blanc() {
  return (
    <div>
        
        <ProjectsHeaderSpatial />

        <LazyLoadImage src={hero} alt="1664 Blanc" className='blancHero'/>
        <div className='stackContainer'>
            <div className='stackItem1'>
                <LazyLoadImage className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>CONCEPT DESIGN</p>
            </div>
            <div className='stackItem2'>
                <LazyLoadImage className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItem3 stackItemDesktop10'>
                <LazyLoadImage className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>CARPENTRY</p>
            </div>
            <div className='stackItem4 stackItemDesktop9'>
                <LazyLoadImage className='stackCircleImg' src={circle4} alt="" />
                <p className='stackText'>POP UP</p>
            </div>
            <div className='stackItem1'>
                <LazyLoadImage className='stackCircleImg' src={circle5} alt="" />
                <p className='stackText'>LIGHTING DESIGN</p>
            </div>
            <div className='stackItem4'>
                <LazyLoadImage className='stackCircleImg' src={circle6} alt="" />
                <p className='stackText'>INSTALLATION</p>
            </div>
            <div className='stackItem3'>
                <LazyLoadImage className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>METAL WORK</p>
            </div>
            <div className='stackItem2'>
                <LazyLoadImage className='stackCircleImg' src={circle7} alt="" />
                <p className='stackText'>SPRYING & FINISHING</p>
            </div>
            
        </div>
        <div className='colorSpace'>
            <p className='titleSpatialDetail'>1664 BLANC - LDN FASHION WEEK POP UP</p>
            <div className='separatorSpatial'></div>
            <div className='infoContainerSpatialDetail'>
                <div>
                    <p className='infoTitleSpatialDetail'>CLIENT</p>
                    <p className='infoDataSpatialDetail'>1664 KRONENBERG</p>
                </div>

                <div>
                    <p className='infoTitleSpatialDetail'>AGENCY</p>
                    <p className='infoDataSpatialDetail'>GUNGA & <br className='breakMobileAndTablet' />STUDIO STILTON</p>
                </div>

                <div>
                    <p className='infoTitleSpatialDetail'>LOCATION</p>
                    <p className='infoDataSpatialDetail'>SELFRIDGES</p>
                </div>
            </div>
            <div className='infoSpatialDetailTextContainer'>
            <p>As part of London Fashion Week, we worked alongside 1664 Blanc to create this fantastic 
                French-inspired kiosque. We built this pop up at Selfridges, where people came to stake 
                a sit, relax, and soak up the atmosphere with a bottle of 1664 Blanc. 
            </p>
            <p>
            In collaboration with the agencies Gunga & Studio Stilton, we created this great blue spot, 
            from conceptual design and lighting to its installation.
            </p>
            </div>
        </div>
        <div>
            <LazyLoadImage src={image1} alt="stand 1664" className='image1SpatialDetail' />
            <p className='spatialDetailImagesText'>Behind the scenes</p>
            <div className='spatialDetailImages'>
                <LazyLoadImage src={image2} alt="1664 Blanc" className='spatialDetailImgBlanc blanc1' />
                <LazyLoadImage src={image3} alt="1664 Blanc" className='spatialDetailImgBlanc blanc2'/>
            </div>
        </div>
    </div>
  )
}

export default Blanc