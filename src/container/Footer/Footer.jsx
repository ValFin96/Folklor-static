import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {

  function handleClickInsta() {
    window.open("https://www.instagram.com/limanikkei_sydney/")
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
          <h2 className='app__footer-headtext'>Contact Us</h2>
          <a className='p__heebo' style={{ textDecoration: 'underline', textTransform: 'none' }} href="mailto:hola@limarestaurant.com.au">hola@limarestaurant.com.au</a>
          <p className='p__heebo'>Shop 7&8 16A Hickson Road, Dawes Point NSW 2000</p>
          <p className='p__heebo'></p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.limaFooter} alt="footer_logo" />
          <div className='app__footer-links_icons'>
            <FiFacebook onClick={handleClickFb} />
            <FiInstagram onClick={handleClickInsta} />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h2 className='app__footer-headtext'>Working Hours</h2>
          <table className='work__hours-table'>
            <tbody>
              <tr>
                <td>Tuesday - Thursday:</td>
                <td>5 pm - 10 pm</td>
              </tr>
              <tr>
                <td>Friday:</td>
                <td>12 pm - 3 pm <br></br>5 pm - 11 pm</td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>12 pm - 3 pm <br></br> 5 pm - 11 pm</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>12 pm - 3 pm <br></br> 5 pm - 9 pm</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <div className='footer__copyright'>
        <p className='p__heebo'>2023 Lima Nikkei. All Rights Reserved.</p>
      </div>
    </div>
  )
};

export default Footer;
