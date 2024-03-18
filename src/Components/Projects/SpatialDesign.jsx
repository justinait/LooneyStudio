import React from 'react'
import './SpatialDesign.css'
import { Link } from 'react-router-dom'
import spray from '/sprays/spatialSpray.png'

function SpatialDesign() {
  const spatial = [
    { name: 'BENEFIT', image: '/spatial/Benefit.png', className: '' },
    { name: 'HUDA BEAUTY', image: '/spatial/Huda.jpeg', className: ''},
    { name: 'PINK PANTHERESS', image: '/spatial/Gisou.jpg', className: ''},
    { name: 'GISOU', image: '/spatial/Gisou.jpg', className: ''},
    { name: 'WWE', image: '/spatial/WWE.jpg', className: ''},
    { name: 'DESTREE', image: '/spatial/Destree.jpg', className: ''},
  ]
  return (
    <div>
      <div className='headerProjects'>
        <Link to={'/events'} className='linksSpatial linksProjects projectsLeftLink'>EVENTS & INSTALL</Link>

        <p className='selectedProject'>SPATIAL DESIGN</p>
        <img src={spray} alt="" className='spraySpatial' />
        
        <Link to={'/tvAndFilms'} className='linksSpatial linksProjects projectsRigthLink'>TV & FILMS</Link>
      </div>

      <div className='spatialImagesContainer'>
        {
        spatial.map(e=>{
          return(
            <div className='spatialItemBox'>
              <img src={e.image} alt={e.name} className='spatialImage'/>
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

export default SpatialDesign