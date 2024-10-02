import React from 'react'
import './SpatialDetail.css'
import hero from '../../assets/spatial/DestreeHero.jpg'
import circle1 from '../../assets/spatial/circle1.png'
import circle2 from '../../assets/spatial/circle2.png'
import circle3 from '../../assets/spatial/circle3.png'
import circle4 from '../../assets/spatial/circle4.png'
import circle6 from '../../assets/spatial/circle6.png'
import xSpray from '../../assets/spatial/xSpray.png'
import image1 from '../../assets/spatial/destree4.jpg'
import image2 from '../../assets/spatial/destree2cut.jpg'
import image3 from '../../assets/spatial/Destree.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeaderSpatial from '/src/Components/ProjectsHeader/ProjectsHeaderSpatial';

function Destree() {
  return (
    <div>
        
        <ProjectsHeaderSpatial/>
        
        <LazyLoadImage src={hero} alt="DESTREE" className='blancHero mobileOnly'/>
        <LazyLoadImage src={image3} alt="DESTREE" className='blancHero desktopOnly'/>
        <div className='stackContainer stackContainerDestree'>
            <div className='stackItemDestree1'>
                <LazyLoadImage className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>CONCEPT DESIGN</p>
            </div>
            <div className='stackItemDestree2'>
                <LazyLoadImage className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItemDestree3'>
                <LazyLoadImage className='stackCircleImg' src={circle4} alt="" />
                <p className='stackText'>POP UP</p>
            </div>
            <div className='stackItemDestree3'>
                <LazyLoadImage className='stackCircleImg' src={circle6} alt="" />
                <p className='stackText'>INSTALLATION</p>
            </div>
            <div className='stackItemDestree3'>
                <LazyLoadImage className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>CARPENTRY</p>
            </div>
            
        </div>
        <div className='colorSpace'>
            <p className='titleSpatialDetail'>DESTREE - HARROD’S POP UP</p>
            <div className='separatorSpatial'></div>
            <div className='infoContainerSpatialDetail'>
                <div>
                    <p className='infoTitleSpatialDetail'>CLIENT</p>
                    <p className='infoDataSpatialDetail'>DESTREE</p>
                </div>

                <div>
                    <p className='infoTitleSpatialDetail'>AGENCY</p>
                    <p className='infoDataSpatialDetail'>POP UP MOB</p>
                </div>

                <div>
                    <p className='infoTitleSpatialDetail'>LOCATION</p>
                    <p className='infoDataSpatialDetail'>HARRODS</p>
                </div>
            </div>
            <div className='infoSpatialDetailTextContainer'>
                <p>Up and coming French brand, Destree, enlisted our expertise for
                    the realization of their inaugural
                    pop up at Harrods in London. <br />
                    Guided by the clear vision of
                    Destree’s creative team, we
                    seamlessly brought their concept to
                    fruition. Overcoming spatial
                    constraints, we meticulously
                    reimagined the pop up space,
                    ensuring timely delivery 
                </p>
                <p>
                and budget
                adherence, paramount to the
                project’s success. <br />
                Embracing organic forms inspired by
                the realm of their iconic handbags,
                we meticulously crafted bespoke
                rails, table tops, and a captivating
                display wall, seamlessly blending
                elegance and functionality to
                showcase Destree’s exquisite collection.
                </p>
            </div>
        </div>
        <div>
            <LazyLoadImage src={image1} alt="Destree" className='image1SpatialDetailDestree' />
            <div className='spatialDetailImages'>
                <LazyLoadImage src={image2} alt="1664 Blanc" className='spatialDetailImgDestree' />
                <LazyLoadImage src={image3} alt="1664 Blanc" className='spatialDetailImgDestree mobileOnly'/>
                <LazyLoadImage src={hero} alt="1664 Blanc" className='spatialDetailImgDestree2 desktopOnly'/>
            </div>
        </div>
    </div>
  )
}

export default Destree