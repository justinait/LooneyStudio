import React, { useEffect, useState } from 'react'
import './Services.css'
import spray from '/sprays/AssetsHero.png'

function Services() {
    const [open, setOpen] = useState(false);
    const [openServicesForm, setOpenServicesForm] = useState(false);
    const [service, setService] = useState('');
    const [inputFilled, setInputFilled] = useState(false);
    const services = [
        { name: 'CONCEPT DESIGN', image: '/services/conceptdesign.png', text: 'Our design team swiftly transforms ideas into reality, crafting mood boards, sketches, and 3D models that embody your vision. Emphasizing aesthetics, functionality, and meticulous attention to detail, we seamlessly merge innovation and practicality in our design process.', className: '' },
        { name: 'PROJECT MANAGEMENT', image: '/services/projectmanagement.png', text: 'Our dedicated project managers oversee every aspect of the build, ensuring communication, progress monitoring, and budget adherence. Renowned for flexibility, they provide guidance and support throughout the process.', className: 'littleServicesText'},
        { name: 'CARPENTRY', image: '/services/carpentry.png', text: 'Nestled in Brixton, our 3000 sqft workshop is fully equipped to handle multiple projects of any scale. Our skilled carpenters embrace collaboration and sustainability, repurposing every piece of wood to minimize waste.', className: 'littleServicesText'},
        { name: 'METAL WORK', image: '/services/metalwork.png', text: 'Fortunately, our metal workers are conveniently located nearby, ready to fulfill all your fabrication needs. With expertise in intricate details and robust structures, we handle diverse metal projects efficiently. This proximity fosters seamless collaboration with our woodwork team, enabling innovative combinations and swift, quality deliveries.', className: 'bigServicesText biggerLetter'},
        { name: 'CNCING', image: '/services/cncing.png', text: 'With our CNC machining capabilities, we offer rapid turnaround for intricate builds needing precise cuts. Our large format CNC machine, with a 10ft by 5ft bed size, can cut various materials, including full sheets, for the production of larger components as needed.', className: 'biggerLetter'},
        { name: 'FINISHING & SPRAYING', image: '/services/spraying.png', text: 'From scenic painting to unique custom finishes, we excel in creating any desired texture envisioned by our designers and clients. Just as we prioritize excellent wood joinery, we also prioritize top-notch finishes. With a talented roster of trained scenic painters, sprayers, and prop makers, we consistently deliver the highest quality, bringing bold aesthetic visions to life.', className: 'bigServicesText'},
        { name: 'INSTALLATION', image: '/services/installation.png', text: "We don't just create; we install too! Our skilled crew of carpenters, decorators, electricians, and scenics collaborate seamlessly to bring sets to life quickly. From film sets to events, we deliver unmatched speed and precision.", className: 'littleServicesText'},
        { name: 'HIRE', image: '/services/hire.png', text: 'Need scenic equipment urgently? Our stocked inventory includes flats, doors, windows, flooring, braces, stage weights, and more, available for same-day hire. We can even manage delivery and installation if required.  <strong id="enquireHere">ENQUIRE HERE</strong>', className: 'littleServicesText'}
    ]
    
    const handleOpen = (e) => {
        setOpen(true);
        setService(e.name)
    }
    const handleClose =(e)=>{
        setOpen(false)
        setService('')
    }
    
    const handleClick = () => {
        setOpenServicesForm(true);
        console.log(openServicesForm);
    };

    const handleInputChange = (e) =>{
        setInputFilled(e.target.value.trim() !== '');
    }
    useEffect(() => {
        const enquireHere = document.getElementById('enquireHere');
        if (enquireHere) {
            enquireHere.addEventListener('click', handleClick);
            // handleClose();
        }
        
        return () => {
            if (enquireHere) {
                enquireHere.removeEventListener('click', handleClick);
            }
        };
    }, [service]);

    // const enquireHere = document.getElementById('enquireHere');

    
  return (
    <div className='servicesFirstContainer'>

        <div className='servicesContainer'>
            <div>
                <h2> Our Services</h2>
            </div>

            <div className='servicesItemsContainer'>
                {
                    services.map((e, i)=>{
                        return (
                            <div className='serviceItem' key={i}>
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
                                        <p dangerouslySetInnerHTML={{ __html: e.text }} className={`servicesText ${e.className}`}></p>
                                    </div>
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
        <div className='servicesFormContainer'>
            <div>
                <input type="text" placeholder='Production Company Name' className={`inputContactServices locationText ${inputFilled ? 'color-activo' : ''}`} onChange={handleInputChange}/>
                <input type="email" placeholder='Mail' className={`inputContactServices locationText ${inputFilled ? 'color-activo' : ''}`} onChange={handleInputChange}/>
                <input type="text" placeholder='Your Message' className={`inputContactServices locationText ${inputFilled ? 'color-activo' : ''}`} onChange={handleInputChange}/>
            </div>
            <p className='formButtonServices'>Send</p>
            {/* <img src={spray} id='spraySend' alt="" /> */}
        </div>
    </div>
  )
}

export default Services