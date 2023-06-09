import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // function handleClick() {
  //   window.open("https://www.opentable.com.au/r/folklor-restaurant-and-bar-reservations-dawes-point?restref=196004&lang=en-AU&ot_source=Restaurant%20website")
  // }
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href='/#home' > 
        <img src={images.folklor} alt="app logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/#home">HOME</a>
        </li>
        <li className="p__opensans">
          <a href="/#about">ABOUT</a>
        </li>
        <li className="p__opensans">
          <a href="/#menu">MENU</a>
        </li>
        <li className="p__opensans">
          <a href="/#contact">CONTACT</a>
        </li>
      </ul>
      <div className="app__navbar-book">
        <a href="/reservations" className="p__opensans">BOOK TABLE</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="/#home" onClick={() => setToggleMenu(false)}>Home</a>
              </li>
              <li className="p__opensans">
                <a href="/#about" onClick={() => setToggleMenu(false)}>About</a>
              </li>
              <li className="p__opensans">
                <a href="/#menu" onClick={() => setToggleMenu(false)}>Menu</a>
              </li>
              <li className="p__opensans">
                <a href="/#contact" onClick={() => setToggleMenu(false)}>Contact</a>
              </li>
              <li className="p__opensans">
                <a href="/reservations" onClick={() => setToggleMenu(false)} style={{ lineHeight: '2.5rem' }}>Book Table</a>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
