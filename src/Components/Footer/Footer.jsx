import React from 'react'
import './Footer.css'
import ig from '/instagram.png'

function Footer() {
  return (
    <div className='footerContainer'>
      <p to='/' className='footerLooney'>THE LOONEY STUDIO</p>

      <img src={ig} className='instagramIconFooter' alt="instagram" />
      
      <p className='emailFooter'>hello@thelooneystudio.com</p>
    </div>
  )
}

export default Footer