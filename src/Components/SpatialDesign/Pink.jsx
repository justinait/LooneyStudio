import React from 'react'
import hero from '/spatial/pinkHero.png'
import './SpatialDesign.css'
import circle1 from '/spatial/circle1.png'
import circle2 from '/spatial/circle2.png'
import circle3 from '/spatial/circle3.png'
import circle4 from '/spatial/circle4.png'
import circle6 from '/spatial/circle6.png'
import circle8 from '/spatial/circle8.png'
import xSpray from '/spatial/xSpray.png'
import image1 from '/spatial/pink1.png'
import image2 from '/spatial/pink2.png'
import image3 from '/spatial/pink3.png'
import image4 from '/spatial/pink4.png'
import { Link } from 'react-router-dom'

function Pink() {
  return (
    <div>
        <img src={xSpray} className='xSpraySpatial' alt="" />
        <Link to={'/spatialDesign'}><p className='xSpatialDetail'>X</p></Link>
        
        <img src={hero} alt="PINK PANTHERESS" className='blancHero'/>
        <div className='stackContainer stackContainerPink'>
            <div className='stackItemDestree3'>
                <img className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>CONCEPT DESIGN</p>
            </div>
            <div className='stackItemPink2'>
                <img className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItemPink3'>
                <img className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>CARPENTRY</p>
            </div>
            <div className='stackItemDestree3'>
                <img className='stackCircleImg' src={circle4} alt="" />
                <p className='stackText'>PROP MAKING</p>
            </div>
            <div className='stackItem1'>
                <img className='stackCircleImg' src={circle6} alt="" />
                <p className='stackText'>INSTALLATION</p>
            </div>
            <div className='stackItemPink4'>
                <img className='stackCircleImgBig' src={circle8} alt="" />
                <p className='stackText'>FINISHING & <br />SPRYING</p>
            </div>
            
        </div>
        <div className='colorSpace'>
            <p className='titleSpatialDetail'>PINK PANTHERESS - Heaven Knos Album Launch Pop Up</p>
            <div className='separatorSpatial'></div>
            <div className='infoContainerSpatialDetail'>
                <div>
                    <p className='infoTitleSpatialDetail'>CLIENT</p>
                    <p className='infoDataSpatialDetail'>Warner Music UK</p>
                </div>

                <div>
                    <p className='infoTitleSpatialDetail'>LOCATION</p>
                    <p className='infoDataSpatialDetail'>Soho</p>
                </div>
            </div>
            <div className='infoSpatialDetailTextContainer'>
                <p>Commissioned by Warner Music, we
                    were tasked with designing a
                    captivating pop-up experience for the
                    launch of Pink Pantheress’s debut
                    album. Drawing inspiration from her
                    album cover, we embarked on a celestial
                    journey within a three-floor Victorian
                    building in the heart of Soho. Crafting
                    an impactful ntrance was paramount
                    to capturing aention. Upon entering,
                    guests were greeted by a transparent
                    purple installation on the first floor,
                    oering a unique and artistic approach
                    to merchandise display reminiscent of
                    an art gallery exhibition. <br />
                    The second floor enticed visitors to explore Starface products playfully,
                    with samples elegantly showcased on
                    plinths and a bustling beauty corner
                    where technicians pampered guests'
                    nails. Ascending to the third floor, fans
                    were invited to step into the surreal
                    world of Pink Pantheress’s album cover,
                </p>
                <p>
                    with mirror paper adorned surroundings
                    and cameras ready to capture
                    moments in this dreamlike seing.
                    Meanwhile, the fourth floor was
                    transformed into a cozy haven by NTS
                    radio, streaming live during the event.
                    Our bespoke tables and bean bags
                    provided a comfortable retreat for
                    guests to relax and enjoy the ambiance. <br />
                    The entire experience was a resounding
                    success, from setup in just a day to a
                    swift dismantling in a maer of hours,
                    transforming the entire building into a
                    gallery space reminiscent of Dover
                    Street Market’s innovative ethos.
                </p>
            </div>
        </div>
        <div>
            <div className='spatialDetailImagesBoxPink'>
                <img className='spatialDetailImage1' src={image1} alt="" />
                <img className='spatialDetailImage2' src={image2} alt="" />
            </div>
            <div className='spatialDetailImagesBoxPink'>
                <img className='spatialDetailImage1' src={image3} alt="" />
                <img className='spatialDetailImage2' src={image4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Pink