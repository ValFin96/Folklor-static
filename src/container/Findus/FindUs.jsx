import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  function handleClick() {
    window.open("https://www.google.com/maps/place/Lima+Nikkei+Restaurant+%26+Bar/@8.3156972,40.2802571,3z/data=!4m10!1m2!2m1!1slima+Nikkei!3m6!1s0x6b12afed79bffd59:0xd553be5114057465!8m2!3d-33.8562123!4d151.2065927!15sCgtsaW1hIE5pa2tlaVoNIgtsaW1hIG5pa2tlaZIBCnJlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTndkWFJRZGxsM0VBReABAA!16s%2Fg%2F11twmr8hn9?hl=en&entry=ttu")
  }

  return (
    <div className="app__bg app__wrapper section__padding" id='contact'>
      {/* <Helmet>
        <title>Contact Us</title>
        <meta name='description' content='Find where Lima Restaurant is located' />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='Contact Us' />
        <meta property="og:description" content='Find where Lima Restaurant is located' />
        <meta property="og:image" content="%PUBLIC_URL%/favicon.ico?v=2" />
        <meta property="og:url" content="https://limarestaurant.com.au/#contact" />
      </Helmet> */}
      <div className='app__wrapper_info'>
        <SubHeading title='Contact' />
        <h2 className='headtext__matter' style={{ marginBottom: '3rem' }}>
          Find Us
        </h2>
        <div className='app__warapper-content'>
          <p className='p__heebo'>Shop 7&8 16A Hickson Road, Dawes Point NSW 2000</p>
          {/* <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className='p__heebo'>Mon - Fri: 10:00 am - 02:00am</p>
          <p className='p__heebo'>Sat - Sun: 10:00 am - 03:00 am</p> */}
          <button onClick={handleClick} className='custom__button_desktop' style={{ marginTop: '2rem' }}>Visit Us</button>
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt='findus' />
      </div>

    </div>
  )
};

export default FindUs;
