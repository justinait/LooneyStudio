import React from 'react'
import './SpatialDesign.css'
import { Link } from 'react-router-dom'
import spray from '/sprays/spatialSpray.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function SpatialDesign() {
  const spatial = [
    { name: '1664 Blanc - LDN FASHION WEEK', image: '/spatial/1664.jpg', detail: '/blanc', className: ''},
    { name: 'DESTREE', image: '/spatial/Destree.jpg', detail: '/destree', className: ''},
    { name: 'PINK PANTHERESS - Heaven Knows Album', image: '/spatial/pink.png', detail: '/pink', className: 'breakSpatialText'},
    { name: 'BENEFIT - PORE WASH POP UP', image: '/spatial/Benefit.png', detail: '/benefit', className: '' },
    { name: 'GISOU - HOLIDAY POP UP', image: '/spatial/Gisou.jpg', detail: '/gisou', className: ''},
    { name: 'HUDA BEAUTY - MERCURY RETROGADE', image: '/spatial/Huda.jpeg', detail: '/huda', className: 'breakSpatialText breakSpatialTextUnset'},
  ]

  return (
    <div className='spatialContainer'>
      <div className='headerProjects'>
        <div className='headerProjectsSizing'>
          <Link to={'/events'} className='linksSpatial linksProjects projectsLeftLink mobileOnly'>EVENTS & INSTALL</Link>
          <Link to={'/events'} className='linksSpatial linksProjects projectsLeftLink desktopOnlyInline'>EVENTS & INSTALLATIONS</Link>
        </div>

        <p className='selectedProject spatial'>SPATIAL DESIGN</p>
        <LazyLoadImage src={spray} alt="" className='spraySpatial' />
        
        <div className='headerProjectsSizing projectsRigth'>
          <Link to={'/tvAndFilms'} className='linksSpatial linksProjects projectsRigthLink'>TV & FILMS</Link>
        </div>
      </div>

      <div className='spatialImagesContainer'>
        {
        spatial.map(e=>{
          return(
            <Link to={e.detail} className='spatialItemBox' >
              <LazyLoadImage src={e.image} alt={e.name} className='spatialImage' threshold={50}/>
              <div className='imageOverlay'></div>
              <p className={`spatialText ${e.className}`}>{e.name}</p>
            </Link>
          )
        })
          
        }
      </div>
    </div>
  )
}

export default SpatialDesign