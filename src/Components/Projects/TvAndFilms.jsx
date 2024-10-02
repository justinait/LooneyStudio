import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import spray from '../../assets/sprays/tvSpray.png'
import './TvAndFilms.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function TvAndFilms() {

  const [tvandfilms, setTvAndFilms] = useState([])
  useEffect(() => {
      
    fetch('/data.json')
    .then((response) => response.json())
    .then((responseData) => {
        
      setTvAndFilms(responseData.tvandfilms);
  
    });
  }, []);

  
  return (
    <div className='spatialContainer'>
      <div className='headerProjects headerProjectsEvents'>
        <Link to={'/spatialDesign'} className='linksTv linksProjects projectsLeftLink'>SPATIAL DESIGN</Link>
        <p className='selectedProject'>TV & FILMS</p>
        <LazyLoadImage src={spray} alt="" className='sprayTv' />
        <Link to={'/events'} className='linksTv linksProjects projectsRigthLink mobileOnly'>EVENTS & INSTALL</Link>
        <Link to={'/events'} className='linksTv linksProjects projectsLeftLink desktopOnlyInline'>EVENTS & INSTALLATIONS</Link>
      </div>

      <div className='spatialImagesContainer'>
        {
        tvandfilms.map((e, i)=>{
          return(
            <Link to={e.detail} className='spatialItemBox' key={i}>
              <LazyLoadImage src={e.image} alt={e.name} className='spatialImage' threshold={300}/>
              <div className='imageOverlay'></div>
              <p className={`spatialText ${e.className}`}>{e.name}</p>
              <p className={`spatialText tvAndFilmsExtraInfo`}>{e.data}</p>
            </Link>
          )
        })
          
        }
      </div>
    </div>
  )
}

export default TvAndFilms