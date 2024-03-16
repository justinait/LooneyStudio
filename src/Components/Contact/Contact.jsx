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
            <p className='locationText'>
            Unit 2-5, 496 Rathgar Road<br /> SW9 7EP <strong>London</strong> 
            </p>
        </div>
        <div className='containerBox'>
            {/* empty */}
        </div>
        <div className='containerBox'>
            <div>
                Mapa
            </div>
            <div >
                <h3>INSTAGRAM</h3>
                <p className='locationText'>@Thelooneystudio</p>
            </div>
        </div>
        <div className='containerBox'>
            <h3>MAIL</h3>
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Mail' />
            <input type="text" placeholder='Your Message' />
            <button className='formButton'>Send</button>
        </div>
    </div>
  )
}

export default Contact