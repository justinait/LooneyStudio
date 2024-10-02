import React from 'react'
import './EventsDetail.css'
import hero from '../../assets/events/WWEHero.jpg'
import heroDesktop from '../../assets/events/wwedesktop.jpg'
import circle1 from '../../assets/events/circle1.png'
import circle2 from '../../assets/events/circle2.png'
import circle3 from '../../assets/events/circle3.png'
import circle6 from '../../assets/events/circle7.png'
import xSpray from '../../assets/events/xSpray.png'
import image1 from '../../assets/events/wwe1.jpg'
import image2 from '../../assets/events/wwe2.jpg'
import image3 from '../../assets/events/wwe3.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProjectsHeader from '/src/Components/ProjectsHeader/ProjectsHeader';


function WWE() {
  return (
    <div>
      
      <ProjectsHeader />
      
      <LazyLoadImage src={hero} alt="WWE" className='blancHero mobileOnly'/>
      <LazyLoadImage src={heroDesktop} alt="WWE" className='blancHero desktopOnly wweHeroDesktop'/>

      <div className='stackContainerEvents stackContainerEventsSmall'>
        <div className='stackItemEventsLarger2'>
          <LazyLoadImage className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
        </div>
        <div className='stackItemEventsLarger'>
          <LazyLoadImage className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>PROP MAKING</p>
        </div>
        <div className='stackItemEventsLarger'>
          <LazyLoadImage className='stackCircleImg circleImg16' src={circle1} alt="" />
          <p className='stackText'>METALWORK</p>
        </div>
        <div className='stackItemEventsLarger2 bigCircleItemEvents'>
          <LazyLoadImage className='stackCircleImgBig' src={circle6} alt="" />
          <p className='stackText'>FINISHING & <br /> SPRAYING</p>
        </div>

          
      </div>
      <div className='colorSpaceEvents'>
        <p className='titleSpatialDetail'>02 - WWE Money In The Bank Live Event</p>
        <div className='separatorEvents'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>WWE</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>O2 Arena</p>
          </div>

        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>
            Once more, our expertise was sought by the marketing team at the 
            O2 Arena, this time to craft a striking hanging installation for 
            the WWE wrestling event in London. Embracing a bold vision, we opted 
            to recreate the iconic WWE suitcase on a monumental scale, suspending 
            it proudly at the entrance of the O2. To bring this concept to life, 
            we meticulously engineered a custom welded internal frame, expertly
          </p>
          <p>
          rigged to
            the ceiling structure. The exterior
            was then machined and coated on
            fiberglass to emulate the look and
            feel of the original suitcase,
            captivating every passerby with its
            exacting resemblance.
          </p>
        </div>
      </div>
      <div>

        <div>
          <LazyLoadImage src={image1} alt="WWE" className='wweImage1' />
          <p className='eventsDetailImagesText'>Behind the scenes</p>
          <div className='spatialDetailImagesBenefit'>
            <LazyLoadImage src={image2} alt="WWE" className='spatialDetailBenefitImg wweImages'/>
            <LazyLoadImage src={image3} alt="WWE" className='spatialDetailBenefitImg wweImages'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WWE