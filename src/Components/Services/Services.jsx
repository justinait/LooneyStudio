import React from 'react'
import './Services.css'
import spray from '/servicesSpray.png'

function Services() {
    const services = [
        { name: 'CONCEPT DESIGN', video: 'url()', className: '' },
        { name: 'PROJECT MANAGEMENT', video: 'url()', className: ''},
        { name: 'CARPENTRY', video: 'url()', className: ''},
        { name: 'METAL WORK', video: 'url()', className: ''},
        { name: 'CNCING', video: 'url()', className: ''},
        { name: 'FINISHING & SPRAYING', video: 'url()', className: ''},
        { name: 'INSTALLATION', video: 'url()', className: ''},
        { name: 'HIRE', video: 'url()', className: ''}
    ]

  return (
    <div className='servicesContainer'>
        <div>
            <h2> Our Services</h2>
            <img src={spray} alt="" className='sprayServices'/>
        </div>

        <div className='servicesItemsContainer'>
            {
                services.map(e=>{
                    return (
                        <div className='serviceItem'>
                            <p className='serviceItemTitle'>{e.name}</p>
                            <p className='seeMore'>+</p>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Services