import React from 'react'
import { Link } from 'react-router-dom'
import spray from '/sprays/tvSpray.png'
import './TvAndFilms.css'

function TvAndFilms() {
  return (
    <div className='spatialContainer'>
      <div className='headerProjects'>
        <Link to={'/spatialDesign'} className='linksTv linksProjects projectsLeftLink'>SPATIAL DESIGN</Link>
        <p className='selectedProject'>TV & FILMS</p>
        <img src={spray} alt="" className='sprayTv' />
        <Link to={'/events'} className='linksTv linksProjects projectsRigthLink'>EVENTS & INSTALL</Link>
      </div>
    </div>
  )
}

export default TvAndFilms