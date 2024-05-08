import React, { useState } from 'react'
import './Services.css'

function Services() {
    const services = [
        { name: 'CONCEPT DESIGN', image: '/services/conceptdesign.png', text: 'Our design team swiftly transforms ideas into reality, crafting mood boards, sketches, and 3D models that embody your vision. Emphasizing aesthetics, functionality, and meticulous attention to detail, we seamlessly merge innovation and practicality in our design process.', className: '' },
        { name: 'PROJECT MANAGEMENT', image: '/services/projectmanagement.jpg', text: 'Our dedicated project managers oversee every aspect of the build, ensuring communication, progress monitoring, and budget adherence. Renowned for flexibility, they provide guidance and support throughout the process.', className: 'littleServicesText'},
        { name: 'CARPENTRY', image: '/services/carpentry.jpg', text: 'Nestled in Brixton, our 3000 sqft workshop is fully equipped to handle multiple projects of any scale. Our skilled carpenters embrace collaboration and sustainability, repurposing every piece of wood to minimize waste.', className: 'littleServicesText'},
        { name: 'METAL WORK', image: '/services/metalwork.jpg', text: 'Fortunately, our metal workers are conveniently located nearby, ready to fulfill all your fabrication needs. With expertise in intricate details and robust structures, we handle diverse metal projects efficiently. This proximity fosters seamless collaboration with our woodwork team, enabling innovative combinations and swift, quality deliveries.', className: 'bigServicesText biggerLetter'},
        { name: 'CNCING', image: '/services/cncing.png', text: 'With our CNC machining capabilities, we offer rapid turnaround for intricate builds needing precise cuts. Our large format CNC machine, with a 10ft by 5ft bed size, can cut various materials, including full sheets, for the production of larger components as needed.', className: 'biggerLetter'},
        { name: 'FINISHING & SPRAYING', image: '/services/spraying.jpg', text: 'From scenic painting to unique custom finishes, we excel in creating any desired texture envisioned by our designers and clients. Just as we prioritize excellent wood joinery, we also prioritize top-notch finishes. With a talented roster of trained scenic painters, sprayers, and prop makers, we consistently deliver the highest quality, bringing bold aesthetic visions to life.', className: 'biggerServicesText'},
        { name: 'INSTALLATION', image: '/services/installation.jpg', text: "We don't just create; we install too! Our skilled crew of carpenters, decorators, electricians, and scenics collaborate seamlessly to bring sets to life quickly. From film sets to events, we deliver unmatched speed and precision.", className: 'smallerServicesText'},
        { name: 'HIRE', image: '/services/hire.jpg', text: 'Need scenic equipment urgently? Our stocked inventory includes flats, doors, windows, flooring, braces, stage weights, and more, available for same-day hire. We can even manage delivery and installation if required.', className: 'littleServicesText'}
    ]
    const [open, setOpen] = useState(false);
    const [service, setService] = useState('');

    const handleOpen = (e) => {
        setOpen(true);
        setService(e.name)
    }
    const handleClose =(e)=>{
        setOpen(false)
        setService('')
    }

  return (
    <div className='servicesContainer'>
        <div>
            <h2> Our Services</h2>
        </div>

        <div className='servicesItemsContainer'>
            {
                services.map(e=>{
                    return (
                        <div className='serviceItem'>
                            <div className='serviceItemName'>
                                <p className='serviceItemTitle'>{e.name}</p>

                                {(open && service == e.name) ?
                                <p className='seeMore' onClick={()=>handleClose(e)}>-</p>:
                                <p className='seeMore' onClick={()=>handleOpen(e)}>+</p>
                                }
                                
                            </div>
                            {
                                (open && service == e.name) &&
                                <div className='serviceOpenContainer'>
                                    <img src={e.image} alt={e.name} className='imageServices'/>
                                    <p className={`servicesText ${e.className}`}>{e.text}</p>
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

export default Services