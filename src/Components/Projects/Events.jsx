import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
import spray from '/sprays/eventsSpray.png'

function Events() {
  return (
    <div>
      <div className='headerProjects'>
        <Link to={'/tvAndFilms'} className='linksEvents linksProjects projectsLeftLink'>TV & FILMS</Link>
        <p className='selectedProject'>EVENTS & INSTALLATIONS</p>
        <img src={spray} alt="" className='sprayEvents' />
        <Link to={'/spatialDesign'} className='linksEvents linksProjects projectsRigthLink'>SPATIAL DESIGN</Link>
      </div>
    </div>
  )
}

export default Events