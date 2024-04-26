import React from 'react'
import hero from '/events/Warner23-1.jpg'
import './EventsDetail.css'
import circle1 from '/events/circle1.png'
import circle2 from '/events/circle2.png'
import circle3 from '/events/circle3.png'
import circle4 from '/events/circle4.png'
import circle5 from '/events/circle5.png'
import xSpray from '/events/xSpray.png'
import image1 from '/events/Warner23-1.jpg'
import image2 from '/events/Warner23-2.jpg'
import image3 from '/events/Warner23-3.jpg'
import image4 from '/events/Warner23-4.jpg'
import image5 from '/events/Warner23-5.jpg'
import image6 from '/events/Warner23-6.jpg'
import image7 from '/events/Warner23-7.jpg'
import image8 from '/events/Warner23-8.jpg'
import { Link } from 'react-router-dom'


function Warner() {
  return (
    <div>
      <img src={xSpray} className='xSprayEvent' alt="" />
      <Link to={'/events'}><p className='xSpatialDetail'>X</p></Link>
      
      <img src={hero} alt="BENEFIT" className='blancHero'/>
      <div className='stackContainer stackContainerBenefit'>
        <div className='stackItem2'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
        </div>
        <div className='stackItemPink1'>
          <img className='stackCircleImg' src={circle2} alt="" />
          <p className='stackText'>PROJECT MANAGEMENT</p>
        </div>
        <div className='stackItemPink3'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>PROP MAKING</p>
        </div>

        <div className='stackItem4'>
          <img className='stackCircleImg' src={circle4} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItem1'>
          <img className='stackCircleImg' src={circle5} alt="" />
          <p className='stackText'>LIGHTING DESIGN</p>
        </div>
        <div className='stackItem4'>
          <img className='stackCircleImg' src={circle5} alt="" />
          <p className='stackText'>CARPENTRY</p>
        </div>
          
      </div>
      <div className='colorSpace'>
        <p className='titleSpatialDetail'>BENEFIT - Pore Wash Pop Up</p>
        <div className='separatorSpatial'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>Benefit Cosmetics</p>
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
          <p>Building upon Benefit’s successful pop-up in New York, 
            which employed the same theme, we had just a month to 
            meticulously craft all the necessary elements and a mere 
            five days to bring the installation to life on site. 
            With ingenuity and creativity at the forefront, we 
            fashioned a fully functional car wash setup complete 
            with spinning brushes, 
          </p>
          <p>
          mesmerizing floating bubbles, and fuel pumps that playfully 
          dispensed foam. The result was an interactive and experiential 
          journey that left a lasting impression on all who engaged with it.
          </p>
        </div>
      </div>
      <div>
        <div className='spatialDetailImagesBoxBenefit1'>
          <img src={image1} alt="benefit" className='' />
          <img src={image2} alt="benefit" className='' />
          <img src={image3} alt="benefit" className='' />
        </div>

        <img src={image4} className="spatialDetailImageBenefit" />

        <div className='spatialDetailImagesBoxBenefit1'>
          <img src={image5} alt="benefit" className='' />
          <img src={image6} alt="benefit" className='' />
          <img src={image7} alt="benefit" className='' />
        </div>

        <p className='spatialDetailImagesText'>Behind the scenes</p>
        <div className='spatialDetailImagesBenefit'>
          <img src={image8} alt="" />
          <img src={image8} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Warner