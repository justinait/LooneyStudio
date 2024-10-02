import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
import spray from '../../assets/sprays/eventsSpray.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import warner23 from '../../assets/events/Warner23.jpg';
import sezane from '../../assets/events/sezane.jpg';
import WWE from '../../assets/events/WWE.jpg';
import places from '../../assets/events/places.png';
import warner22 from '../../assets/events/Warner22.png';
import elton from '../../assets/events/elton.jpeg';
import molecules from '../../assets/events/molecules.webp';
import dazed from '../../assets/events/dazed.jpeg';
import dixon from '../../assets/events/TOMDIXON.jpg';

function Events() {
  const events = [
    { name: 'WARNER MUSIC CHRISTMAS PARTY 23', image: warner23 , detail: '/warner23', className: 'eventsLeftAligned'},
    { name: 'SEZANE', image: sezane, detail: '/sezane', className: ''},
    { name: 'WWE', image: WWE, detail: '/wwe', className: 'eventsLeftAligned'},
    { name: 'PLACES + FACES', image: places, detail: '/places', className: ''},
    { name: 'WARNER MUSIC CHRISTMAS PARTY 22', image: warner22, detail: '/warner22', className: 'eventsLeftAligned' },
    { name: 'ELTON JHON', image: elton, detail: '/elton', className: ''},
    { name: 'MOLECULES', image: molecules, detail: '/molecules', className: 'eventsLeftAligned'},
    { name: 'NOTHING X DAZED', image: dazed, detail: '/dazed', className: ''},
    { name: 'TOM DIXON', image: dixon, detail: '/dixon', className: ''},
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
        events.map((e)=>{
          return(
            <Link to={e.detail} className={`spatialItemBox ${e.className}`} key={e.name} >
              <LazyLoadImage src={e.image} alt={e.name} className='spatialImage'  threshold={50}/>
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