import React from 'react'
import './SpatialDesign.css'
import { Link } from 'react-router-dom'
import spray from '../../assets/sprays/spatialSpray.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import blanc from '../../assets/spatial/1664.jpg'
import Destree from '../../assets/spatial/Destree.jpg'
import pink from '../../assets/spatial/pink.png'
import Benefit from '../../assets/spatial/Benefit.png'
import Gisou from '../../assets/spatial/Gisou.jpg'
import Huda from '../../assets/spatial/Huda.jpeg'

function SpatialDesign() {
  const spatial = [
    { name: '1664 Blanc - LDN FASHION WEEK', image: blanc, detail: '/blanc', className: ''},
    { name: 'DESTREE', image: Destree, detail: '/destree', className: ''},
    { name: 'PINK PANTHERESS - Heaven Knows Album', image: pink, detail: '/pink', className: 'breakSpatialText'},
    { name: 'BENEFIT - PORE WASH POP UP', image: Benefit, detail: '/benefit', className: '' },
    { name: 'GISOU - HOLIDAY POP UP', image: Gisou, detail: '/gisou', className: ''},
    { name: 'HUDA BEAUTY - MERCURY RETROGADE', image: Huda, detail: '/huda', className: 'breakSpatialText breakSpatialTextUnset'},
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