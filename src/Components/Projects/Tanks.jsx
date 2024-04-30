import React from 'react'
import hero from '/spatial/benefitdetail.png'
import './TvAndFilmsDetails.css'
import circle1 from '/tvandfilms/circle1.png'
import circle2 from '/tvandfilms/circle2.png'
import circle3 from '/tvandfilms/circle3.png'
import circle4 from '/tvandfilms/circle4.png'
import xSpray from '/tvandfilms/xSpray.png'
import { Link } from 'react-router-dom'


function Tanks() {
  return (
    <div>
        <img src={xSpray} className='xSprayTv' alt="" />
        <Link to={'/tvandfilms'}><p className='xTvDetail'>X</p></Link>
      
      <div className='videoTvContainer'>
        <iframe
            title='YouTube Video'
            className='tvHero'
            src='https://www.youtube.com/embed/fBMrZ-GjMgQ?start=271&autoplay=1'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
        />
      </div>
      <div className='stackContainer stackContainerTv'>
        <div className='stackItem2'>
          <img className='stackCircleImg' src={circle2} alt="" />
          <p className='stackText'>SCENIC PAINTING</p>
        </div>
        <div className='stackItemPink1'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>COMMERCIAL</p>
        </div>
        <div className='stackItemPink3'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>SET BULDING</p>
        </div>
      </div>
      <div className='colorSpaceTv'>
        <p className='titleSpatialDetail'>Vinnie Jones joins World of Tanks for Holiday Ops!</p>
        <div className='separatorSpatial'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>WORLD OF TANKS</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>DIRECTOR</p>
            <p className='infoDataSpatialDetail'>Andzej Gavriss</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>PROD. CO.</p>
            <p className='infoDataSpatialDetail'>Halal Amsterdam</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>DESIGNER</p>
            <p className='infoDataSpatialDetail'>Julija Fricsone</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>ART DIRECTOR</p>
            <p className='infoDataSpatialDetail'>Finn Sullivan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tanks