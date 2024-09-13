import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
import spray from '/sprays/eventsSpray.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css';

function Events() {
  const events = [
    { name: 'WARNER MUSIC CHRISTMAS PARTY 23', image: '/events/Warner23.jpg', detail: '/warner23', className: 'eventsLeftAligned'},
    { name: 'SEZANE', image: '/events/sezane.jpg', detail: '/sezane', className: ''},
    { name: 'WWE', image: '/events/WWE.jpg', detail: '/wwe', className: 'eventsLeftAligned'},
    { name: 'PLACES + FACES', image: '/events/places.png', detail: '/places', className: ''},
    { name: 'WARNER MUSIC CHRISTMAS PARTY 22', image: '/events/Warner22.png', detail: '/warner22', className: 'eventsLeftAligned' },
    { name: 'ELTON JHON', image: '/events/elton.jpeg', detail: '/elton', className: ''},
    { name: 'MOLECULES', image: '/events/molecules.jpg', detail: '/molecules', className: 'eventsLeftAligned'},
    { name: 'NOTHING X DAZED', image: '/events/dazed.jpeg', detail: '/dazed', className: ''},
    { name: 'TOM DIXON', image: '/events/TOMDIXON.jpg', detail: '/dixon', className: ''},
  ]
  return (
    <div className='spatialContainer'>
      <div className='headerProjects headerProjectsEvents'>
        <Link to={'/tvAndFilms'} className='linksEvents linksProjects projectsLeftLink'>TV & FILMS</Link>
        <p className='selectedProject'>EVENTS & INSTALLATIONS</p>
        <img src={spray} alt="" className='sprayEvents' />
        <Link to={'/spatialDesign'} className='linksEvents linksProjects projectsRigthLink'>SPATIAL DESIGN</Link>
      </div>

      <div className='spatialImagesContainer eventsImagesContainer'>
      {
        events.map((e, i)=>{
          return(
            <Link to={e.detail} className={`spatialItemBox ${e.className}`} key={i} >
              <LazyLoadImage src={e.image} alt={e.name} className='spatialImage' threshold={50}/>
              <div className='imageOverlay'></div>
              <p className='spatialText'>{e.name}</p>
              
            </Link>
          )
        })
          
        }
      </div>
    </div>
  )
}

export default Events