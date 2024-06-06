import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import spray from '/sprays/tvSpray.png'
import emailjs from '@emailjs/browser';
import markerIcon from '/marker.png';


function Contact() {

    const [inputValues, setInputValues] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [inputFilled, setInputFilled] = useState({
        fullName: false,
        email: false,
        message: false
    });
    const [formSent, setFormSent] = useState(false);
    const [showErrors, setShowErrors] = useState(false);

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

    // const handleFocus = (field) => {
    //     setInputFilled({
    //         ...inputFilled,
    //         [field]: true
    //     });
    // };

    // const handleBlur = (field) => {
    //     if (inputValues[field].trim() === '') {
    //         setInputFilled({
    //             ...inputFilled,
    //             [field]: false
    //         });
    //     }
    // };

    const handleSubmit = () => {
        const isFormComplete = Object.values(inputValues).every(value => value.trim() !== '');
        if (isFormComplete) {
            setFormSent(true);
            setShowErrors(false);
            setTimeout(() => {
                setFormSent(false);
                setInputValues({
                    fullName: '',
                    email: '',
                    message: ''
                });
                setInputFilled({
                    fullName: false,
                    email: false,
                    message: false
                });
            }, 2000); // Reset after 2 seconds
        } else {
            setShowErrors(true);
        }
    };



    const { isLoaded } = useJsApiLoader({
        id: 'dc395694d3c4c44',
        googleMapsApiKey: "AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y",
    })
    const mapRef = useRef(null);
    const mapStyles = [
        {
            "elementType": "geometry",
            "stylers": [
                { "color": "#212121" }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                { "visibility": "off" }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#757575" }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                { "color": "#212121" }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                { "color": "#757575" }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#9e9e9e" }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                { "visibility": "off" }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#bdbdbd" }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#757575" }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                { "color": "#181818" }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#616161" }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "color": "#1b1b1b" }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": "#2c2c2c" }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#8a8a8a" }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                { "color": "#373737" }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                { "color": "#3c3c3c" }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                { "color": "#4e4e4e" }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#616161" }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#757575" }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                { "color": "#000000" }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#3d3d3d" }
            ]
        }
    ];
    
    
    const markerPosition = {
        lat: 51.466214348028984,
        lng: -0.10306554686605598,
    };

    const mapContainerRef = useRef(null);
    useEffect(() => {
        if (isLoaded && mapContainerRef.current) {
            const position = { lat: 51.466214348028984, lng: -0.10306554686605598 };
            new window.google.maps.Marker({
                position,
                map: mapContainerRef.current.getMap(),
                icon: markerIcon,
            });
        }
    }, [isLoaded]);

  return (
    <div className='contactAuxContainer'>
        <div className='contactSprayContainer'>

            <div className='contactContainer'>
                <div className='contactUsContainer'>
                    <p className='contactUs'>Contact <br /> Us</p>
                </div>
                <div className='contactContainerBox'>

                    <div className='containerBox halfDesktop'>
                        <h3>LOCATION</h3>
                        <p className='locationText'>
                        Unit 2-5, 496 Rathgar Road<br className='breakMobileAndTablet' /> SW9 7EP <strong>London</strong> 
                        </p>
                    </div>
                    <div className='containerBox mobileOnly'>
                        {/* empty */}
                    </div>

                    <div className='containerBox biggerBoxAbout'>
                        <div className='mapBoxContainer'>
                            {isLoaded && 
                                <GoogleMap 
                                    zoom={12}
                                    center={{ lat: 51.466214348028984, lng: -0.10306554686605598 }}
                                    mapContainerClassName='mapContainer'
                                    options={{ styles: mapStyles }}
                                    ref={mapRef}
                                >
                                <Marker position={markerPosition}/>
                                </GoogleMap>
                            }
                        </div>

                        <div className='instagramBox'>
                            <h3>INSTAGRAM</h3>
                            <p className='locationText'>@Thelooneystudio</p>
                        </div>
                    </div>

                    <div className='containerBox halfBigDesktop'>
                        <h3>MAIL</h3>
                        <div className='contactFormContainer'>
                        <input
                            type="text"
                            name="fullName"
                            placeholder='Full Name'
                            className={`inputContact locationText ${showErrors && !inputFilled.fullName ? 'input-error' : ''} ${inputValues.fullName.trim() !== '' ? 'color-activo' : ''}`}
                            onChange={handleInputChange}
                            value={inputValues.fullName}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Mail'
                            className={`inputContact locationText ${showErrors && !inputFilled.email ? 'input-error' : ''} ${inputValues.email.trim() !== '' ? 'color-activo' : ''}`}
                            onChange={handleInputChange}
                            value={inputValues.email}
                        />
                        <input
                            type="text"
                            name="message"
                            placeholder='Your Message'
                            className={`inputContact locationText ${showErrors && !inputFilled.message ? 'input-error' : ''} ${inputValues.message.trim() !== '' ? 'color-activo' : ''}`}
                            onChange={handleInputChange}
                            value={inputValues.message}
                        />
                        </div>
                        <p className='formButton' onClick={handleSubmit}>
                            {formSent ? 'Message sent' : 'Send'}
                        </p>
                        {/* <img src={spray} id='spraySend' alt="" /> */}
                    </div>
                </div>
                
                {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y&callback=initMap&map_ids=dc395694d3c4c44" defer></script> */}
                
            </div>
        </div>
    </div>
  )
}

export default Contact