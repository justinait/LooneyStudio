import React from 'react'
import './Contact.css'
import spray from '/contactSpray.png'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


function Contact() {
    
    const { isLoaded } = useJsApiLoader({
        id: '436bcb265c6ff251',
        googleMapsApiKey: 'AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y'
    })

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
        
        <div className='containerBox biggerBoxAbout'>
            <div className='mapBoxContainer'>
                {isLoaded && 
                    <GoogleMap 
                    zoom={12}
                    center={{ lat: 51.466214348028984, lng: -0.10306554686605598 }}
                    mapContainerClassName='mapContainer'
                    mapId='436bcb265c6ff251'
                    className='mapContainer'
                    >
                    <Marker 
                    position={{ lat: 51.466214348028984, lng: -0.10306554686605598 }} 
                    
                    />
                    </GoogleMap>
                }


            </div>
            <div className='instagramBox'>
                <h3>INSTAGRAM</h3>
                <p className='locationText'>@Thelooneystudio</p>
            </div>
        </div>

        <div className='containerBox'>
            <h3>MAIL</h3>
            <div>
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='Mail' />
                <input type="text" placeholder='Your Message' />
            </div>
            <p className='formButton'>Send</p>
        </div>
        
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y&callback=initMap&map_ids=436bcb265c6ff251"></script>
        
    </div>
  )
}

export default Contact