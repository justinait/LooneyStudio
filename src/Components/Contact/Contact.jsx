import React from 'react'
import './Contact.css'
import spray from '/contactSpray.png'

function Contact() {
  return (
    <div className='contactContainer'>
        <div className='contactUsContainer'>
            <p className='contactUs'>Contact <br /> Us</p>
            <img src={spray} className='sprayContact' alt="" />
        </div>
        <div className='containerBox'>
            <h3>LOCATION</h3>
            <p className='locationText'>Brixton, <br />
            Rathgar Rd, XXXX
            </p>
        </div>
        <div className='containerBox'>
            {/* empty */}
        </div>
        <div className='containerBox'>
            Mapa
        </div>
        <div className='containerBox'>
            <h3>MAIL</h3>
        </div>
        <div className='containerBox'>
            <h3>CALL</h3>
            <p className='locationText'>(555) 555-5555</p>
        </div>
        <div className='containerBox'>
            <h3>INSTAGRAM</h3>
            <p className='locationText'>@Thelooneystudio</p>
        </div>
    </div>
  )
}

export default Contact