import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
import spray from '/sprays/eventsSpray.png'

function Events() {
  const events = [
    { name: 'WARNER 22', image: '/events/Warner22.png', detail: '/events/benefitdetail.png', className: '' },
    { name: 'MOLECULES', image: '/events/molecules.jpg', detail: '', className: ''},
    { name: 'TOM DIXON', image: '/events/TOMDIXON.jpg', detail: '', className: ''},
    { name: 'ELTON JHON', image: '/events/elton.jpeg', detail: '', className: ''},
    { name: 'WARNER 23', image: '/events/Warner23.jpg', detail: '', className: ''},
  ]
  return (
    <div className='spatialContainer'>
      <div className='headerProjects'>
        <Link to={'/tvAndFilms'} className='linksEvents linksProjects projectsLeftLink'>TV & FILMS</Link>
        <p className='selectedProject'>EVENTS & INSTALLATIONS</p>
        <img src={spray} alt="" className='sprayEvents' />
        <Link to={'/spatialDesign'} className='linksEvents linksProjects projectsRigthLink'>SPATIAL DESIGN</Link>
      </div>
      <div className='spatialImagesContainer'>
      {
        events.map(e=>{
          return(
            <div className='spatialItemBox' >
              <img src={e.image} alt={e.name} className='spatialImage' onClick={()=>openDetail(e)}/>
              <div className='imageOverlay'></div>
              <p className='spatialText'>{e.name}</p>
              
            </div>
          )
        })
          
        }
      </div>
    </div>
  )
}

export default Events