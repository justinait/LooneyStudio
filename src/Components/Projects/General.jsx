import React, { useEffect, useState } from 'react'
import './TvDetails.css'
import circle1 from '/tvandfilms/circle1.png'
import circle2 from '/tvandfilms/circle2.png'
import circle3 from '/tvandfilms/circle3.png'
import circle4 from '/tvandfilms/circle4.png'
import xSpray from '/tvandfilms/xSpray.png'
import { Link, useParams, useNavigate } from 'react-router-dom'
function General() {
  
  const [data, setData] = useState([]);
  const [thisItem, setThisItem] = useState({})
  const {id} = useParams();
  const imageMap = [circle1, circle2, circle3];
  const navigate = useNavigate();
  
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

  const navigateToItem = (direction) => {
    const currentIndex = data.findIndex(item => item.detail === id);
    const newIndex = (currentIndex + direction + data.length) % data.length;
    const newItem = data[newIndex];
    if (newItem) {
      navigate(`/tvandfilms/${newItem.detail}`);
    }
  };
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const handleOverlayClick = (event) => {
      event.stopPropagation();
      setIsOverlayActive(true);
      console.log('overlay active');
  };
  const handleOverlayClose = () => {
      setIsOverlayActive(false);
  };

  const {videoLink, videoName, client, director, producer, designer, artdirector, name, stack, producer2, videoType, behind} = thisItem
  useEffect(() => {
    const iframe = document.querySelector('.tvHero');
    if (iframe) {
      iframe.style.width = '100vw';
    }
  }, []);
  const containerWidth = stack ? `${Math.min(50 + (stack.length - 2) * 20, 80)}vw` : '50vw';

  let videoIframe
  switch (videoType) {
    case 'vimeo':
      videoIframe = (
        <iframe
          title='Vimeo Video'
          className='tvHero tvHeroVimeo'
          src={`https://player.vimeo.com/video/${videoLink}&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1`}
          // src={`https://player.vimeo.com/video/${videoLink}?autoplay=1&loop=1&background=1&muted=1`}
          allow='autoplay; fullscreen; picture-in-picture'
          allowFullScreen
          style={{ width: '100%' }}
        />
      );
      break;
    case 'file':
      videoIframe = (
        <video className='tvHero'  controls autoPlay loop muted  style={{ width: '100%' }}>
          <source src={videoLink} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      );
      break;
    case 'youtube':
    default:
      videoIframe = (
        <iframe
          title='YouTube Video'
          className='tvHero'
          src={`https://www.youtube.com/embed/${videoLink}?loop=1&playlist=${videoLink}&autoplay=1&mute=1&cc_load_policy=0`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          style={{ width: '100%' }}
        />
      );
  }
  return (
    <div>

      <div className='arrowsContainer'>

        <button onClick={() => navigateToItem(-1)} className='arrowsTv'> {"<"} </button>
        
        <img src={xSpray} className='xSprayTv' alt="" />
        <Link to={'/tvandfilms'}><p className='xTvDetail'>X</p></Link>
        
        <button onClick={() => navigateToItem(1)} className='arrowsTv'>{">"}</button>
      </div>

      <div className='videoTvContainer' onClick={handleOverlayClick} >
        {videoIframe}
        {/* <div onClick={handleOverlayClick} className='videoSimulationBox'>        </div> */}
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

      <div className='stackContainer stackContainerTv'  style={{ width: containerWidth }}>
        {
        stack?.map((e, i)=> {
          return(
            <div className='stackItemTv'  key={i}>
              <img className='stackCircleImg circleImg16' src={imageMap[i % imageMap.length]} alt="" />
              <p className='stackText'>{e}</p>
            </div>
          )
        })
        }
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
          {
            producer2 &&
            <div>
              <p className='infoTitleSpatialDetail'>PRODUCER</p>
              <p className='infoDataSpatialDetail tvAndFilmsDetailTextSpecial'>{producer2}</p>
            </div>
          }
          {
            artdirector &&
            <div>
              <p className='infoTitleSpatialDetail'>ART DIRECTOR</p>
              <p className='infoDataSpatialDetail tvAndFilmsDetailText'>{artdirector}</p>
            </div>
          }
          

        </div>
      </div>
      {
        behind &&
        <div>
          <p className='tvDetailImagesText'>Behind the scenes</p>
          <div className=''>
            <img src={behind} alt="SEZANE" className='willBehindImage'/>
          </div>
        </div>
      }
    </div>
  )
}

export default General