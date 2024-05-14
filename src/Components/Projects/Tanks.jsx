import React, { useState } from 'react'
import hero from '/spatial/benefitdetail.png'
// import './TvAndFilmsDetails.css'
import './TvDetails.css'
import circle1 from '/tvandfilms/circle1.png'
import circle2 from '/tvandfilms/circle2.png'
import circle3 from '/tvandfilms/circle3.png'
import circle4 from '/tvandfilms/circle4.png'
import xSpray from '/tvandfilms/xSpray.png'
import { Link } from 'react-router-dom'
import Ratio from 'react-bootstrap/Ratio';

function Tanks() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const handleOverlayClick = (event) => {
    event.stopPropagation();
    setIsOverlayActive(true);
    console.log('overlay active');
  };
  
  const handleOverlayClose = () => {
    setIsOverlayActive(false);
  };
  // const handleFullScreenClick = () => {
  //   const videoElement = videoRef.current;
  //   if (videoElement.requestFullscreen) {
  //     videoElement.requestFullscreen();
  //   } else if (videoElement.mozRequestFullScreen) { /* Firefox */
  //     videoElement.mozRequestFullScreen();
  //   } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
  //     videoElement.webkitRequestFullscreen();
  //   } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
  //     videoElement.msRequestFullscreen();
  //   }
  // };
  const handleBackgroundVideoClick = (event) => {
    event.preventDefault(); // Evita que el clic detenga la reproducción del video de fondo
    event.stopPropagation(); // Evita que el clic se propague al video de fondo
  };
  return (
    <div>
      <img src={xSpray} className='xSprayTv' alt="World of Tanks" />
      <Link to={'/tvandfilms'}><p className='xTvDetail'>X</p></Link>
      
      <div className='videoTvContainer' onClick={handleOverlayClick} >
        <div onClick={handleOverlayClick} className='videoSimulationBox'>
        </div>
        <iframe
        onClick={handleBackgroundVideoClick}
          title='YouTube Video'
          className='tvHero'
          src='https://www.youtube.com/embed/fBMrZ-GjMgQ?start=271&autoplay=1&mute=1&loop=1&cc_load_policy=0'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop; web-share'
          // <iframe width="300" height="300" src={videoUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoItem' ></iframe>
          allowFullScreen
        />
      
      </div>
      
      {isOverlayActive && (
        <div className='youtube-player-overlay' onClick={handleOverlayClose}>
          <div className='youtube-player-popup'>
            {console.log('golaaaaaa')}
            <iframe
              src="https://www.youtube.com/embed/fBMrZ-GjMgQ"
              title="Vinnie Jones joins World of Tanks for Holiday Ops!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className='stackContainer stackContainerTv'>
        <div className='stackItemPink1'>
          <img className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>SCENIC PAINTING</p>
        </div>
        <div className='stackItemDestree3'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>COMMERCIAL</p>
        </div>
        <div className='stackItem1'>
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