import React from 'react'
import './SpatialDesign.css'
import hero from '../../assets/spatial/hudaheromobile.jpg'
import heroDesktop from '../../assets/spatial/Huda.jpeg'
import circle1 from '../../assets/spatial/circle1.png'
import circle2 from '../../assets/spatial/circle2.png'
import circle3 from '../../assets/spatial/circle3.png'
import circle4 from '../../assets/spatial/circle4.png'
import circle6 from '../../assets/spatial/circle6.png'
import xSpray from '../../assets/spatial/xSpray.png'
import image1 from '../../assets/spatial/huda1.jpg'
import image2 from '../../assets/spatial/huda2.jpeg'
import image3 from '../../assets/spatial/huda3.jpeg'
import image4 from '../../assets/spatial/huda4.jpg'
import image5 from '../../assets/spatial/huda5.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeaderSpatial from '/src/Components/ProjectsHeader/ProjectsHeaderSpatial';

function Huda() {
  return (
    <div>
        
        <ProjectsHeaderSpatial/>

        <LazyLoadImage src={hero} alt="huda" className='blancHero mobileOnly'/>
        <LazyLoadImage src={heroDesktop} alt="huda" className='blancHero desktopOnly'/>
        <div className='stackContainer stackContainerPink'>
            <div className='stackItem2'>
                <img className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>CONCEPT DESIGN</p>
            </div>
            <div className='stackItemPink2'>
                <img className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItemPink3 stackItemDesktop10'>
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
            <div className='stackItemPink3 stackItemDesktop10'>
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
                a mirror tunnel entrance, alongside a hidden mirror room that left visitors awe-struck.
            </p>
            <p>
            This ambitious design project featured a stunning crystal 
            facade constructed with bespoke welded metal frames, cutting-edge sound technology, 
            and a vibrant interior. It became a must-visit destination during the Christmas period, 
            offering passersby an immersive glimpse into the essence of Huda Beauty.
            </p>
            </div>
        </div>
        <div>
            <LazyLoadImage src={image1} alt="benefit" className='image1SpatialDetail' />

            <div className='spatialDetailImagesBoxHuda'>
                <LazyLoadImage className='spatialDetailImage2' src={image2} alt="huda" />
                <LazyLoadImage className='spatialDetailImage1' src={image3} alt="huda" />
            </div>

            <p className='spatialDetailImagesText'>Behind the scenes</p>
            <div className='spatialDetailImages'>
                <LazyLoadImage className='spatialDetailImage3' src={image4} alt="huda" />
                <LazyLoadImage className='spatialDetailImage4' src={image5} alt="huda" />
            </div>
        </div>
    </div>
  )
}

export default Huda