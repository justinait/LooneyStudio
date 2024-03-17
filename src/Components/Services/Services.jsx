import React, { useState } from 'react'
import './Services.css'
import spray from '/sprays/servicesSpray.png'

function Services() {
    const services = [
        { name: 'CONCEPT DESIGN', image: '/services/conceptdesign.png', className: '' },
        { name: 'PROJECT MANAGEMENT', image: '/services/projectmanagement.jpg', className: ''},
        { name: 'CARPENTRY', image: '/services/carpentry.jpg', className: ''},
        { name: 'METAL WORK', image: '/services/metalwork.jpg', className: ''},
        { name: 'CNCING', image: '/services/metalwork.jpg', className: ''},
        { name: 'FINISHING & SPRAYING', image: '/services/spraying.jpg', className: ''},
        { name: 'INSTALLATION', image: '/services/installation.jpg', className: ''},
        { name: 'HIRE', image: '/services/hire.jpg', className: ''}
    ]
    const [open, setOpen] = useState(false);
    const [service, setService] = useState(false);

    const handleOpen = (e) => {
        setOpen(!open);
        setService(e.name)
    }

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
                            <div className='serviceItemName'>
                                <p className='serviceItemTitle'>{e.name}</p>
                                {
                                    (!open && service !== e.name) ?
                                    <p className='seeMore' onClick={()=>handleOpen(e)}>+</p>:
                                    <p className='seeMore' onClick={()=>handleOpen(e)}>-</p>
                                }
                            </div>
                            {
                                (open && service == e.name) &&
                                <img src={e.image} alt={e.name} className='imageServices'/>
                            }
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Services