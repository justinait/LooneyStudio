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
import image0 from '/spatial/pink0.png'
import image5 from '/spatial/pinkmedio.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeaderSpatial from '/src/Components/ProjectsHeader/ProjectsHeaderSpatial';

function Pink() {
  return (
    <div>
        
        <ProjectsHeaderSpatial/>

        <LazyLoadImage src={hero} alt="PINK PANTHERESS" className='blancHero transformHero'/>
        <div className='stackContainer stackContainerPink'>
            <div className='stackItemDestree3'>
                <img className='stackCircleImg' src={circle1} alt="" />
                <p className='stackText'>CONCEPT DESIGN</p>
            </div>
            <div className='stackItemPink2'>
                <img className='stackCircleImg' src={circle2} alt="" />
                <p className='stackText'>PROJECT MANAGEMENT</p>
            </div>
            <div className='stackItemPink3 stackItemDesktop10'>
                <img className='stackCircleImg' src={circle3} alt="" />
                <p className='stackText'>CARPENTRY</p>
            </div>
            <div className='stackItemDestree3 stackItemDesktop15'>
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
            <p className='titleSpatialDetail'>PINK PANTHERESS - Heaven Knows Album</p>
            <div className='separatorSpatial'></div>
            <div className='infoContainerSpatialDetail'>
                <div>
                    <p className='infoTitleSpatialDetail'>CLIENT</p>
                    <p className='infoDataSpatialDetail'>Warner Music UK</p>
                </div>

                <div>
                    <p className='infoTitleSpatialDetail'>LOCATION</p>
                    <p className='infoDataSpatialDetail'>19 GREEK STREET, Soho</p>
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
                    an impactful entrance was paramount
                    to capturing attention. Upon entering,
                    guests were greeted by a transparent
                    purple installation on the first floor,
                    offering a unique and artistic approach
                    to merchandise display reminiscent of
                    an art gallery exhibition. <br />
                    The second floor enticed visitors to explore Starface products playfully,
                    with samples elegantly showcased on
                    plinths and a bustling beauty corner
                    where technicians 
                </p>
                <p>
                    pampered guests'
                    nails. Ascending to the third floor, fans
                    were invited to step into the surreal
                    world of Pink Pantheress’s album cover,
                    with mirror paper adorned surroundings
                    and cameras ready to capture moments in this dreamlike seeing. <br />
                    Meanwhile, the fourth floor was
                    transformed into a cozy heaven by NTS
                    radio, streaming live during the event.
                    Our bespoke tables and bean bags
                    provided a comfortable retreat for
                    guests to relax and enjoy the ambiance. <br />
                    The entire experience was a resounding
                    success, from setup in just a day to a
                    swift dismantling in a matter of hours,
                    transforming the entire building into a
                    gallery space reminiscent of Dover
                    Street Market’s innovative ethos.
                </p>
            </div>
        </div>
        <div>
            <LazyLoadImage src={image0} className='image1SpatialDetailDestree marginBottom' alt="" />
            <div className='spatialDetailImagesBoxPink'>
                <LazyLoadImage className='spatialDetailImage1' src={image1} alt="PINK PANTHERESS" />
                <LazyLoadImage className='spatialDetailImage2' src={image2} alt="PINK PANTHERESS" />
            </div>

            <LazyLoadImage src={image5} className='placesImage1 marginBottom' alt="" />
            <div className='spatialDetailImagesBoxPink'>
                <LazyLoadImage className='spatialDetailImage1' src={image3} alt="PINK PANTHERESS" />
                <LazyLoadImage className='spatialDetailImage2' src={image4} alt="PINK PANTHERESS" />
            </div>
        </div>
    </div>
  )
}

export default Pink