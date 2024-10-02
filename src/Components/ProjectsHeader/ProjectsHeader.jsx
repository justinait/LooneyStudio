import React from 'react'
import xSpray from '../../assets/events/xSpray.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ProjectsHeader() {
  //PARA EVENTS
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentEvent = currentPath.split('/').pop();

  const events = [
    { name: 'WARNER MUSIC CHRISTMAS PARTY 23', detail: 'warner23'},
    { name: 'SEZANE', detail: 'sezane'},
    { name: 'WWE', detail: 'wwe'},
    { name: 'PLACES + FACES', detail: 'places'},
    { name: 'WARNER MUSIC CHRISTMAS PARTY 22', detail: 'warner22' },
    { name: 'ELTON JHON', detail: 'elton'},
    { name: 'MOLECULES', detail: 'molecules'},
    { name: 'NOTHING X DAZED', detail: 'dazed'},
    { name: 'TOM DIXON', detail: 'dixon'},
  ]

  const navigateToItem = (direction) => {
    
    const currentIndex = events.findIndex(item => item.detail === currentEvent);
    const newIndex = (currentIndex + direction + events.length) % events.length;
    const newItem = events[newIndex];
    if (newItem) {
      navigate(`/${newItem.detail}`);
    }
  };

  return (
    <div>
      <div className='xOnlyForDesktop'>
        <LazyLoadImage src={xSpray} className='xSprayEvent' alt="" />
        <Link to={'/events'}><p className='xTvDetail'>X</p></Link>
      </div>
      
      <div className='arrowsContainer'>

        <button onClick={() => navigateToItem(-1)} className='arrowsEvents'>{"<"}</button>
      
        <div className='xNotForDesktop'>
          <LazyLoadImage src={xSpray} className='xSprayEvent' alt="" />
          <Link to={'/events'}><p className='xTvDetail'>X</p></Link>
        </div>
        
        <button onClick={() => navigateToItem(1)} className='arrowsEvents'>{">"}</button>
      </div>

    </div>
  )
}

export default ProjectsHeader