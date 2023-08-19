import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
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

const ReservationsNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        const scrollingUp =  prevScrollPos < 0 || prevScrollPos > currentScrollPos;

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
        document.body.classList.remove( 'overflow-hidden');
    }

    return () => {
        window.removeEventListener('scroll', debouncedHandleScroll, { passive: true });
        document.body.classList.remove( 'overflow-hidden');
    };
}, [prevScrollPos, toggleMenu]);

  return (
    <nav className={`app__navbar ${isVisible ? '' : 'hidden'} ${isAtTop ? 'transparent-nav' : 'non-transparent-nav'}`}>
      <div className="app__navbar-logo">
      <a href="/#home">
          <img src={images.limaLogo} alt="app logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__heebo">
        <a href="/#home">HOME</a>
        </li>
        <li className="p__heebo">
        <a href="/#about" >ABOUT</a>
        </li>
        <li className="p__heebo">
        <a href="/#menu" >MENU</a>
        </li>
        <li className="p__heebo">
        <a href="/#contact" >CONTACT</a>
        </li>
      </ul>
      <div className="app__navbar-book">
      <Link to="/reservations" className="p__heebo">BOOK TABLE</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__heebo">
                <a href="/#home" onClick={() => setToggleMenu(false)}>Home</a>
              </li>
              <li className="p__heebo">
                <a href="/#about" onClick={() => setToggleMenu(false)}>About</a>
              </li>
              <li className="p__heebo">
              <a href="/#menu" onClick={() => setToggleMenu(false)}>Menu</a>
              </li>
              <li className="p__heebo">
              <a href="/#contact" onClick={() => setToggleMenu(false)}>Contact</a>
              </li>
              <li className="p__heebo">
                <Link to="/reservations" onClick={() => setToggleMenu(false)} style={{ lineHeight: '2.5rem' }}>Book Table</Link>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default ReservationsNavbar;
