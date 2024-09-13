import React from 'react'
import xSpray from '/events/xSpray.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ProjectsHeader() {
  //PARA EVENTS
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentEvent = currentPath.split('/').pop();

  const events = [
    { name: 'WARNER MUSIC CHRISTMAS PARTY 23', image: '/events/Warner23.jpg', detail: 'warner23', className: 'eventsLeftAligned'},
    { name: 'SEZANE', image: '/events/sezane.jpg', detail: 'sezane', className: ''},
    { name: 'WWE', image: '/events/WWE.jpg', detail: 'wwe', className: 'eventsLeftAligned'},
    { name: 'PLACES + FACES', image: '/events/places.png', detail: 'places', className: ''},
    { name: 'WARNER MUSIC CHRISTMAS PARTY 22', image: '/events/Warner22.png', detail: 'warner22', className: 'eventsLeftAligned' },
    { name: 'ELTON JHON', image: '/events/elton.jpeg', detail: 'elton', className: ''},
    { name: 'MOLECULES', image: '/events/molecules.jpg', detail: 'molecules', className: 'eventsLeftAligned'},
    { name: 'NOTHING X DAZED', image: '/events/dazed.jpeg', detail: 'dazed', className: ''},
    { name: 'TOM DIXON', image: '/events/TOMDIXON.jpg', detail: 'dixon', className: ''},
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