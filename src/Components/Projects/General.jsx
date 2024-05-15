import React, { useEffect, useState } from 'react'
import './TvDetails.css'
import circle1 from '/tvandfilms/circle1.png'
import circle2 from '/tvandfilms/circle2.png'
import circle3 from '/tvandfilms/circle3.png'
import circle4 from '/tvandfilms/circle4.png'
import xSpray from '/tvandfilms/xSpray.png'
import { Link, useParams } from 'react-router-dom'
// import tvandfilmsData from './data.json';

function General() {
    
  const [data, setData] = useState([]);
  const [thisItem, setThisItem] = useState({})
  const {id} = useParams();
  
  useEffect(() => {
      
    fetch('/data.json')
    .then((response) => response.json())
    .then((responseData) => {
        
      setData(responseData.tvandfilms);

      const item = responseData.tvandfilms.find(e => e.detail === id);
      if (item) {
        setThisItem(item);
      }
  
    });
  }, [id]);

  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const handleOverlayClick = (event) => {
      event.stopPropagation();
      setIsOverlayActive(true);
      console.log('overlay active');
  };

  const handleOverlayClose = () => {
      setIsOverlayActive(false);
  };

  const {videoLink, videoName, client, director, producer, designer, nameDetail, name} = thisItem

  return (
    <div>
      <img src={xSpray} className='xSprayTv' alt="" />
      <Link to={'/tvandfilms'}><p className='xTvDetail'>X</p></Link>
      
      <div className='videoTvContainer' onClick={handleOverlayClick} >
        <div onClick={handleOverlayClick} className='videoSimulationBox'>
        </div>
        <iframe
          title='YouTube Video'
          className='tvHero'
          src= {`https://www.youtube.com/embed/${videoLink}?loop=1&playlist=${videoLink}&autoplay=1&mute=1&cc_load_policy=0`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          loop
          />
        {console.log(videoLink)}
      
      </div>
      
      {/* {isOverlayActive && (
        <div className='youtube-player-overlay' onClick={handleOverlayClose}>
          <div className='youtube-player-popup'>
            <iframe
              src={thisItem.videoLink}
              title={thisItem.videoName}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loop
            />
          </div>
        </div>
      )} */}

      <div className='stackContainer stackContainerTv'>
        <div className='stackItemPink1'>
          <img className='stackCircleImg circleImg16' src={circle2} alt="" />
          <p className='stackText'>SET BUILDING</p>
        </div>
        <div className='stackItemDestree3'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>ALBUM RELEASE</p>
        </div>
        <div className='stackItem1'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>PROP</p>
        </div>
      </div>
      <div className='colorSpaceTv'>
        <p className='titleSpatialDetail'>{name}</p>
        <div className='separatorSpatial'></div>
        <div className='infoContainerSpatialDetail'>
          {
            client &&
            <div>
              <p className='infoTitleSpatialDetail'>CLIENT</p>
              <p className='infoDataSpatialDetail tvAndFilmsDetailText'>{client}</p>
            </div>
          }
          
          {
            director &&
            <div>
              <p className='infoTitleSpatialDetail'>DIRECTOR</p>
              <p className='infoDataSpatialDetail tvAndFilmsDetailText'>{director}</p>
            </div>
          }
          {
            producer &&
            <div>
              <p className='infoTitleSpatialDetail'>PROD. CO.</p>
              <p className='infoDataSpatialDetail tvAndFilmsDetailText'>{producer}</p>
            </div>
          }
          {
            designer &&
            <div>
              <p className='infoTitleSpatialDetail'>DESIGNER</p>
              <p className='infoDataSpatialDetail tvAndFilmsDetailText'>{designer}</p>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default General