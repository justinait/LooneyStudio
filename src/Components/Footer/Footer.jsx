import React from 'react'
import './Footer.css'
import ig from '/instagram.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footerContainer'>
      <Link to='/' className='footerLooney'>THE LOONEY STUDIO</Link>

      <a href='https://www.instagram.com/thelooneystudio/' target='blank'><img src={ig} className='instagramIconFooter' alt="instagram" /></a>
      
      <a href="mailto:hello@thelooneystudio.com" target='_blank' className='emailFooter'>hello@thelooneystudio.com</a>
      
    </div>
  )
}

export default Footer