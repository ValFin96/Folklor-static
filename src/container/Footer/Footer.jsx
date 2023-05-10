import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {

  function handleClickInsta() {
    window.open("https://www.instagram.com/folklor.restaurant/")
  }

  function handleClickFb() {
    window.open("https://www.facebook.com/folklor.restaurant/")
  }


  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>Shop 7&8 16A Hickson Road, Dawes Point NSW 2000</p>
          <p className='p__opensans'></p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.folklorFooter} alt="footer_logo" />
          <div className='app__footer-links_icons'>
            <FiFacebook onClick={handleClickFb} />
            <FiInstagram onClick={handleClickInsta} />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Grand Opening is on the 1st of June!</p>
          {/* <p className='p__opensans'>12:00 am - 05:00 pm </p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>12:00 am - 05:00 pm</p> */}

        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>2023 Folklor. All Rights Reserved.</p>
      </div>
    </div>
  )
};

export default Footer;
