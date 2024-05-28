import React from 'react'
import hero from '/spatial/DestreeHero.jpg'
import './SpatialDetail.css'
import circle1 from '/spatial/circle1.png'
import circle2 from '/spatial/circle2.png'
import circle3 from '/spatial/circle3.png'
import circle4 from '/spatial/circle4.png'
import circle6 from '/spatial/circle6.png'
import xSpray from '/spatial/xSpray.png'
import image1 from '/spatial/destree4.jpg'
import image2 from '/spatial/destree2cut.jpg'
import image3 from '/spatial/Destree.jpg'
import { Link } from 'react-router-dom'

function Destree() {
  return (
    <div>
        
        <div className='arrowsContainer'>
            <Link to={'/blanc'} className='arrowsEvents arrowSpatial'>{"<"}</Link>
            
            <img src={xSpray} className='xSpraySpatial' alt="" />
            <Link to={'/spatialDesign'}><p className='xTvDetail'>X</p></Link>
            
            <Link to={'/pink'} className='arrowsEvents arrowSpatial'>{">"}</Link>
        </div>
        
        <img src={hero} alt="DESTREE" className='blancHero mobileOnly'/>
        <img src={image3} alt="DESTREE" className='blancHero desktopOnly'/>
        <div className='stackContainer stackContainerDestree'>
            <div className='stackItemDestree1'>
                <img className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>CONCEPT DESIGN</p>
            </div>
            <div className='stackItemDestree2'>
                <img className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItemDestree3'>
                <img className='stackCircleImg' src={circle4} alt="" />
                <p className='stackText'>POP UP</p>
            </div>
            <div className='stackItemDestree3'>
                <img className='stackCircleImg' src={circle6} alt="" />
                <p className='stackText'>INSTALLATION</p>
            </div>
            <div className='stackItemDestree3'>
                <img className='stackCircleImg' src={circle3} alt="" />
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
            <img src={image1} alt="Destree" className='image1SpatialDetailDestree' />
            <div className='spatialDetailImages'>
                <img src={image2} alt="1664 Blanc" className='spatialDetailImgDestree' />
                <img src={image3} alt="1664 Blanc" className='spatialDetailImgDestree mobileOnly'/>
                <img src={hero} alt="1664 Blanc" className='spatialDetailImgDestree2 desktopOnly'/>
            </div>
        </div>
    </div>
  )
}

export default Destree