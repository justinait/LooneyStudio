import React, { useState } from 'react'
import './SpatialDesign.css'
import { Link } from 'react-router-dom'
import spray from '/sprays/spatialSpray.png'

function SpatialDesign() {
  const spatial = [
    { name: 'BENEFIT', image: '/spatial/Benefit.png', detail: '/spatial/benefitdetail.png', className: '' },
    { name: 'HUDA BEAUTY', image: '/spatial/Huda.jpeg', detail: '', className: ''},
    { name: 'PINK PANTHERESS', image: '/spatial/Gisou.jpg', detail: '', className: ''},
    { name: 'GISOU', image: '/spatial/Gisou.jpg', detail: '', className: ''},
    { name: 'WWE', image: '/spatial/WWE.jpg', detail: '', className: ''},
    { name: 'DESTREE', image: '/spatial/Destree.jpg', detail: '', className: ''},
  ]

  const [open, setOpen] = useState(false)
  const [service, setService] = useState(false);

  const openDetail=(e)=> {
    setOpen(true);
    setService(e)
  }
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
            <div className='spatialItemBox' >
              <img src={e.image} alt={e.name} className='spatialImage' onClick={()=>openDetail(e)}/>
              <div className='imageOverlay'></div>
              <p className='spatialText'>{e.name}</p>
              {
              (open && service == e.name) &&
                <div className='spatialDetail'>
                  <img src={e.detail} alt={e.name} />
                </div>
              }
            </div>
          )
        })
          
            
        
        }
      </div>
    </div>
  )
}

export default SpatialDesign