import React, { useEffect, useRef, useState } from 'react'
import './Services.css'
import spray from '/sprays/tvSpray.png'
import emailjs from '@emailjs/browser';

function Services() {

    const form = useRef();
    const service_id = import.meta.env.VITE_API_SERVICEID;
    const template_id = import.meta.env.VITE_API_TEMPLATEID;
    const public_id = import.meta.env.VITE_API_PUBLICID;
  
    const [open, setOpen] = useState(false);
    const [openServicesForm, setOpenServicesForm] = useState(false);
    const [service, setService] = useState('');
    const [inputValues, setInputValues] = useState({
        companyName: '',
        email: '',
        message: ''
    });
    const [inputFilled, setInputFilled] = useState({
        companyName: false,
        email: false,
        message: false
    });
    const [formSent, setFormSent] = useState(false);
    const [showErrors, setShowErrors] = useState(false);

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
        setService(e.name);
        setOpenServicesForm(false);
    }
    const handleClose =(e)=>{
        setOpen(false)
        setService('')
    }
    
    const handleClick = () => {
        setOpenServicesForm(true);
        handleClose();
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
        setInputFilled({
            ...inputFilled,
            [name]: value.trim() !== ''
        });
    };
    const sendEmailForm = (e) => {
        e.preventDefault();
        let stop = false;
        Object.keys(inputValues).forEach(key => {
            if (inputValues[key].trim().length === 0) {
                stop = true;
                setInputFilled(prev => ({
                    ...prev,
                    [key]: false
                }));
                setShowErrors(true);
            }
        });
        if (stop) return;

        setFormSent(true);
        handleSubmit()
    };
    const handleSubmit = () => {
        const isFormComplete = Object.values(inputValues).every(value => value.trim() !== '');
        if (isFormComplete) {
            setFormSent(true);
            setShowErrors(false);
            emailjs.sendForm(service_id, template_id, form.current, public_id)
            .then((result) => {
                console.log(result.text);
                setTimeout(() => {
                    setFormSent(false);
                    setInputValues({
                        companyName: '',
                        email: '',
                        message: ''
                    });
                    setInputFilled({
                        companyName: false,
                        email: false,
                        message: false
                    });
                }, 2000); // Reset after 2 seconds
            }, (error) => {
                console.log(error.text);
            });
        } else {
            setShowErrors(true);
        }
    };

    useEffect(() => {
        const enquireHere = document.getElementById('enquireHere');
        if (enquireHere) {
            enquireHere.addEventListener('click', handleClick);
        }
        
        return () => {
            if (enquireHere) {
                enquireHere.removeEventListener('click', handleClick);
            }
        };
    }, [service]);

    
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
        {
            openServicesForm &&
            <form className='servicesFormContainer' ref={form} onSubmit={sendEmailForm} >
                <div>
                    <input
                        type="text"
                        name="companyName"
                        placeholder='Production Company Name'
                        className={`inputContactServices locationText ${showErrors && !inputFilled.companyName ? 'input-error' : ''} ${inputValues.companyName.trim() !== '' ? 'color-activo' : ''}`}
                        onChange={handleInputChange}
                        value={inputValues.companyName}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder='Mail'
                        className={`inputContactServices locationText ${showErrors && !inputFilled.email ? 'input-error' : ''} ${inputValues.email.trim() !== '' ? 'color-activo' : ''}`}
                        onChange={handleInputChange}
                        value={inputValues.email}
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder='Your Message'
                        className={`inputContactServices locationText ${showErrors && !inputFilled.message ? 'input-error' : ''} ${inputValues.message.trim() !== '' ? 'color-activo' : ''}`}
                        onChange={handleInputChange}
                        value={inputValues.message}
                    />
                </div>
                <p className='formButtonServices' type='submit' onClick={handleSubmit}>
                    {formSent ? 'Message sent' : 'Send'}
                </p>
                {formSent && <img src={spray} id='spraySendServices' className='show' alt="spray" />}
            </form>
        }
    </div>
  )
}

export default Services