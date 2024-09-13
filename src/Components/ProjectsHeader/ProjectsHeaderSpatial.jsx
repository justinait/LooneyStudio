import React from 'react'
import xSpray from '/spatial/xSpray.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './ProjectsHeader.css'

function projectsHeader() {
  //PARA SPATIAL
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentEvent = currentPath.split('/').pop();

  const spatial = [
    { name: '1664 Blanc - LDN FASHION WEEK', image: '/spatial/1664.jpg', detail: 'blanc', className: ''},
    { name: 'DESTREE', image: '/spatial/Destree.jpg', detail: 'destree', className: ''},
    { name: 'PINK PANTHERESS - Heaven Knows Album', image: '/spatial/pink.png', detail: 'pink', className: 'breakSpatialText'},
    { name: 'BENEFIT - PORE WASH POP UP', image: '/spatial/Benefit.png', detail: 'benefit', className: '' },
    { name: 'GISOU - HOLIDAY POP UP', image: '/spatial/Gisou.jpg', detail: 'gisou', className: ''},
    { name: 'HUDA BEAUTY - MERCURY RETROGADE', image: '/spatial/Huda.jpeg', detail: 'huda', className: 'breakSpatialText breakSpatialTextUnset'},
  ]

  const navigateToItem = (direction) => {
    
    const currentIndex = spatial.findIndex(item => item.detail === currentEvent);
    const newIndex = (currentIndex + direction + spatial.length) % spatial.length;
    const newItem = spatial[newIndex];
    if (newItem) {
      navigate(`/${newItem.detail}`);
    }
  };

  return (
    <div>
      <div className='xOnlyForDesktop'>
        <LazyLoadImage src={xSpray} className='xSpraySpatial' alt="" />
        <Link to={'/spatialDesign'}><p className='xTvDetail'>X</p></Link>
      </div>
      
      <div className='arrowsContainer'>

        <button onClick={() => navigateToItem(-1)} className='arrowSpatial'>{"<"}</button>
      
        <div className='xNotForDesktop'>
          <LazyLoadImage src={xSpray} className='xSpraySpatial' alt="" />
          <Link to={'/spatialDesign'}><p className='xTvDetail'>X</p></Link>
        </div>
        
        <button onClick={() => navigateToItem(1)} className='arrowSpatial'>{">"}</button>
      </div>

    </div>
  )
}

export default projectsHeader