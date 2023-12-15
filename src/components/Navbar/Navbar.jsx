import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      const scrollingUp = prevScrollPos < 0 || prevScrollPos > currentScrollPos;

      setIsAtTop(currentScrollPos <= 0);
      setPrevScrollPos(currentScrollPos);

      if (scrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const debouncedHandleScroll = debounce(handleScroll, 15);

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    if (toggleMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll, { passive: true });
      document.body.classList.remove('overflow-hidden');
    };
  }, [prevScrollPos, toggleMenu]);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <nav className={`app__navbar ${isVisible ? '' : 'hidden'} ${isAtTop ? 'transparent-nav' : 'non-transparent-nav'}`}>
      <div className="app__navbar-logo">
        <ScrollLink to="home" smooth={true} duration={300}>
          <img src={images.limaLogo} alt="app logo" title="Lima Nikkei Restaurant Logo" loading="lazy" width="170" height="auto" />
        </ScrollLink>
      </div>
      <ul className="app__navbar-links">
        <li className="p__heebo">
          <ScrollLink to="home" smooth={true} duration={300}>HOME</ScrollLink>
        </li>
        <li className="p__heebo">
          <ScrollLink to="about" smooth={true} duration={300}>ABOUT</ScrollLink>
        </li>
        <li className="p__heebo">
          <ScrollLink to="menu" smooth={true} duration={300}>MENU</ScrollLink>
        </li>
        <li className="p__heebo">
          <ScrollLink to="contact" smooth={true} duration={300}>CONTACT</ScrollLink>
        </li>
        <li className="p__heebo">
          <Link to="https://app.gift-it.com.au/buy/warike-limanikkei" target='_blank' smooth={true} duration={300}>GIFT CARDS</Link>
        </li>
      </ul>
      <div className="app__navbar-book">
        <Link to="https://www.sevenrooms.com/reservations/limarestaurant?venues=limarestaurant,warikerestaurant" target='_blank' className="p__heebo">BOOK TABLE</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__heebo">
                <ScrollLink to="home" onClick={() => setToggleMenu(false)}>Home</ScrollLink>
              </li>
              <li className="p__heebo">
                <ScrollLink to="about" onClick={() => setToggleMenu(false)}>About</ScrollLink>
              </li>
              <li className="p__heebo">
                <ScrollLink to="menu" onClick={() => setToggleMenu(false)}>Menu</ScrollLink>
              </li>
              <li className="p__heebo">
                <ScrollLink to="contact" onClick={() => setToggleMenu(false)}>Contact</ScrollLink>
              </li>
              <li className="p__heebo">
                <Link to="https://app.gift-it.com.au/buy/warike-limanikkei" target='_blank'>GIFT CARDS</Link>
              </li>
              <li className="p__heebo">
                <Link to="https://www.sevenrooms.com/reservations/limarestaurant?venues=limarestaurant,warikerestaurant" target="_blank" onClick={() => setToggleMenu(false)} style={{ lineHeight: '2.5rem' }}>Book Table</Link>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
